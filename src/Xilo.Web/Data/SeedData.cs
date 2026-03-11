using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Xilo.Web.Data;

public static class SeedData
{
    public const string SuperAdminRole = "SuperAdmin";
    public const string ClientRole = "Client";

    public static async Task InitializeAsync(IServiceProvider services)
    {
        var roleManager = services.GetRequiredService<RoleManager<IdentityRole>>();
        var userManager = services.GetRequiredService<UserManager<AppUser>>();
        var db = services.GetRequiredService<XiloDbContext>();

        // ── Roles ──────────────────────────────────────────────
        foreach (var role in new[] { SuperAdminRole, ClientRole })
        {
            if (!await roleManager.RoleExistsAsync(role))
                await roleManager.CreateAsync(new IdentityRole(role));
        }

        // ── SuperAdmin user ────────────────────────────────────
        var adminEmail = "admin@xipetechnology.com";
        if (await userManager.FindByEmailAsync(adminEmail) is null)
        {
            var admin = new AppUser
            {
                UserName = adminEmail,
                Email = adminEmail,
                FullName = "XILO Super Admin",
                EmailConfirmed = true
            };
            var result = await userManager.CreateAsync(admin, "Admin123!");
            if (result.Succeeded)
                await userManager.AddToRoleAsync(admin, SuperAdminRole);
        }

        // ── Demo Client ────────────────────────────────────────
        var clientEmail = "cliente@demo.com";
        if (await userManager.FindByEmailAsync(clientEmail) is null)
        {
            var client = new AppUser
            {
                UserName = clientEmail,
                Email = clientEmail,
                FullName = "Cliente Demo",
                EmailConfirmed = true
            };
            var result = await userManager.CreateAsync(client, "Client123!");
            if (result.Succeeded)
                await userManager.AddToRoleAsync(client, ClientRole);
        }

        // ── Web Packages ───────────────────────────────────────
        if (!await db.WebPackages.AnyAsync())
        {
            db.WebPackages.AddRange(
                new WebPackage
                {
                    Name = "Web Development",
                    Description = "Complete website with CMS, mobile-first design, bilingual, domain setup, up to 3 design proposals.",
                    Price = 950m,
                    OriginalPrice = 1200m
                },
                new WebPackage
                {
                    Name = "Branding + Web",
                    Description = "Full branding identity plus a custom-built website.",
                    Price = 1800m,
                    OriginalPrice = 2400m
                }
            );
            await db.SaveChangesAsync();
        }

        // ── Demo Website for client ───────────────────────────
        if (!await db.Websites.AnyAsync())
        {
            var client = await userManager.FindByEmailAsync(clientEmail);
            var pkg = await db.WebPackages.FirstAsync();
            if (client is not null)
            {
                db.Websites.Add(new Website
                {
                    UserId = client.Id,
                    WebPackageId = pkg.Id,
                    Name = "Mi Primer Sitio",
                    Url = "https://demo.xipetechnology.com",
                    Status = "in-progress"
                });
                await db.SaveChangesAsync();

                var site = await db.Websites.FirstAsync();
                db.ProjectMessages.Add(new ProjectMessage
                {
                    WebsiteId = site.Id,
                    SenderId = client.Id,
                    SenderName = "Cliente Demo",
                    IsFromTeam = false,
                    Body = "Hola! Acabo de iniciar mi proyecto, estoy emocionado."
                });
                var admin = await userManager.FindByEmailAsync(adminEmail);
                if (admin is not null)
                {
                    db.ProjectMessages.Add(new ProjectMessage
                    {
                        WebsiteId = site.Id,
                        SenderId = admin.Id,
                        SenderName = "XIPE Team",
                        IsFromTeam = true,
                        Body = "Bienvenido! Ya estamos revisando tus assets. Te contactamos pronto.",
                        SentAt = DateTime.UtcNow.AddMinutes(5)
                    });
                }
                await db.SaveChangesAsync();
            }
        }

        // ── Support Plans ──────────────────────────────────────
        if (!await db.SupportPlans.AnyAsync())
        {
            db.SupportPlans.AddRange(
                new SupportPlan
                {
                    Name = "Essential Support",
                    Description = "100 monthly credits with Ai Diana, Cloud Hosting, Basic Security.",
                    MonthlyPrice = 25m
                },
                new SupportPlan
                {
                    Name = "Optimization Support",
                    Description = "300 monthly credits with Ai Diana, Cloud Hosting, Basic Security.",
                    MonthlyPrice = 50m,
                    IsFeatured = true
                },
                new SupportPlan
                {
                    Name = "Strategic Support",
                    Description = "100 monthly change credits, Cloud Hosting, Advanced Security, 1:1 strategy 5h/month.",
                    MonthlyPrice = 199m
                }
            );
            await db.SaveChangesAsync();
        }
    }
}
