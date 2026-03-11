using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Xilo.Web.Components;
using Xilo.Web.Data;

var builder = WebApplication.CreateBuilder(args);

// Database
builder.Services.AddDbContext<XiloDbContext>(options =>
    options.UseSqlite("Data Source=xilo.db"));
builder.Services.AddDbContextFactory<XiloDbContext>(options =>
    options.UseSqlite("Data Source=xilo.db"), ServiceLifetime.Scoped);

// Identity
builder.Services.AddIdentity<AppUser, IdentityRole>(options =>
{
    options.Password.RequiredLength = 6;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = false;
    options.Password.RequireLowercase = false;
    options.Password.RequireDigit = false;
    options.User.RequireUniqueEmail = true;
})
.AddEntityFrameworkStores<XiloDbContext>()
.AddDefaultTokenProviders();

builder.Services.ConfigureApplicationCookie(options =>
{
    options.LoginPath = "/account/login";
    options.AccessDeniedPath = "/account/access-denied";
});

// Blazor
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();
builder.Services.AddSingleton<Xilo.Web.Services.ChatNotifier>();
builder.Services.AddCascadingAuthenticationState();

var app = builder.Build();

// Seed database
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<XiloDbContext>();
    db.Database.EnsureCreated();
    await SeedData.InitializeAsync(scope.ServiceProvider);
}

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.UseAntiforgery();

app.MapStaticAssets();

// File upload endpoint (outside Blazor SSR to support multipart/form-data)
app.MapPost("/api/assets/upload", async (HttpContext ctx, XiloDbContext db, IWebHostEnvironment env) =>
{
    var user = ctx.User;
    var userId = user.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
    if (userId is null)
        return Results.Redirect("/account/login");

    if (!int.TryParse(ctx.Request.Form["siteId"], out var siteId))
        return Results.BadRequest();

    var isSuperAdmin = user.IsInRole("SuperAdmin");
    var owns = await db.Websites.AnyAsync(w => w.Id == siteId && (w.UserId == userId || isSuperAdmin));
    if (!owns) return Results.Forbid();

    var files = ctx.Request.Form.Files.GetFiles("files");
    if (files.Count == 0)
        return Results.Redirect($"/admin/assets/{siteId}");

    var uploadsDir = Path.Combine(env.WebRootPath, "uploads", siteId.ToString());
    Directory.CreateDirectory(uploadsDir);

    foreach (var file in files)
    {
        if (file.Length == 0 || file.Length > 10 * 1024 * 1024)
            continue;

        var safeName = $"{Guid.NewGuid():N}_{Path.GetFileName(file.FileName)}";
        var filePath = Path.Combine(uploadsDir, safeName);

        using (var stream = new FileStream(filePath, FileMode.Create))
            await file.CopyToAsync(stream);

        db.ProjectAssets.Add(new Xilo.Web.Data.ProjectAsset
        {
            WebsiteId = siteId,
            FileName = file.FileName,
            StoredPath = $"uploads/{siteId}/{safeName}",
            FileSize = file.Length,
            ContentType = file.ContentType
        });
    }

    await db.SaveChangesAsync();

    // Support custom return URL (e.g. onboarding step 4)
    var returnUrl = ctx.Request.Query["returnUrl"].FirstOrDefault();
    if (!string.IsNullOrEmpty(returnUrl) && returnUrl.StartsWith("/"))
        return Results.Redirect($"{returnUrl}?uploaded=1");

    return Results.Redirect($"/admin/assets/{siteId}?uploaded=1");
}).DisableAntiforgery();

// Create project endpoint (onboarding step 2 — after payment)
app.MapPost("/api/onboarding/create-project", async (HttpContext ctx, XiloDbContext db) =>
{
    var userId = ctx.User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
    if (userId is null)
        return Results.Redirect("/account/login");

    if (!int.TryParse(ctx.Request.Form["packageId"], out var packageId) || packageId == 0)
        return Results.Redirect("/onboarding/step-2");

    // Verify package exists
    var pkg = await db.WebPackages.FindAsync(packageId);
    if (pkg is null)
        return Results.Redirect("/onboarding/step-2");

    // Count existing projects for default name
    var count = await db.Websites.CountAsync(w => w.UserId == userId);
    var projectName = count == 0 ? "Project 1" : $"Project {count + 1}";

    db.Websites.Add(new Xilo.Web.Data.Website
    {
        UserId = userId,
        WebPackageId = packageId,
        Name = projectName,
        Status = "pending"
    });
    await db.SaveChangesAsync();

    return Results.Redirect("/onboarding/step-3");
}).DisableAntiforgery();

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.Run();
