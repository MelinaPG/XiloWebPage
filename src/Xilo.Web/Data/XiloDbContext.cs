using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Xilo.Web.Data;

public class XiloDbContext : IdentityDbContext<AppUser, IdentityRole, string>
{
    public XiloDbContext(DbContextOptions<XiloDbContext> options) : base(options) { }

    public DbSet<WebPackage> WebPackages => Set<WebPackage>();
    public DbSet<SupportPlan> SupportPlans => Set<SupportPlan>();
    public DbSet<Website> Websites => Set<Website>();
    public DbSet<ProjectAsset> ProjectAssets => Set<ProjectAsset>();
    public DbSet<ProjectMessage> ProjectMessages => Set<ProjectMessage>();
    public DbSet<SupportTicket> SupportTickets => Set<SupportTicket>();
    public DbSet<TicketComment> TicketComments => Set<TicketComment>();

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<Website>(e =>
        {
            e.HasOne(w => w.User).WithMany().HasForeignKey(w => w.UserId);
            e.HasOne(w => w.Package).WithMany(p => p.Websites).HasForeignKey(w => w.WebPackageId);
            e.HasOne(w => w.SupportPlan).WithMany(s => s.Websites).HasForeignKey(w => w.SupportPlanId);
        });

        builder.Entity<WebPackage>(e =>
        {
            e.Property(p => p.Price).HasColumnType("decimal(10,2)");
            e.Property(p => p.OriginalPrice).HasColumnType("decimal(10,2)");
        });

        builder.Entity<SupportPlan>(e =>
        {
            e.Property(p => p.MonthlyPrice).HasColumnType("decimal(10,2)");
        });

        builder.Entity<ProjectAsset>(e =>
        {
            e.HasOne(a => a.Website).WithMany(w => w.Assets).HasForeignKey(a => a.WebsiteId);
        });

        builder.Entity<ProjectMessage>(e =>
        {
            e.HasOne(m => m.Website).WithMany(w => w.Messages).HasForeignKey(m => m.WebsiteId);
            e.HasOne(m => m.Sender).WithMany().HasForeignKey(m => m.SenderId);
        });

        builder.Entity<SupportTicket>(e =>
        {
            e.HasOne(t => t.Website).WithMany().HasForeignKey(t => t.WebsiteId);
            e.HasOne(t => t.CreatedBy).WithMany().HasForeignKey(t => t.CreatedById);
            e.HasOne(t => t.AssignedTo).WithMany().HasForeignKey(t => t.AssignedToId);
            e.Property(t => t.Priority).HasDefaultValue("medium");
            e.Property(t => t.Status).HasDefaultValue("open");
            e.Property(t => t.Category).HasDefaultValue("support");
        });

        builder.Entity<TicketComment>(e =>
        {
            e.HasOne(c => c.Ticket).WithMany(t => t.Comments).HasForeignKey(c => c.TicketId);
            e.HasOne(c => c.Author).WithMany().HasForeignKey(c => c.AuthorId);
        });
    }
}
