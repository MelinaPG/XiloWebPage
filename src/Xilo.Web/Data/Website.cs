namespace Xilo.Web.Data;

public class Website
{
    public int Id { get; set; }
    public string UserId { get; set; } = string.Empty;
    public int WebPackageId { get; set; }
    public int? SupportPlanId { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Url { get; set; }
    public string Status { get; set; } = "pending";   // pending | in-progress | live
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public AppUser User { get; set; } = null!;
    public WebPackage Package { get; set; } = null!;
    public SupportPlan? SupportPlan { get; set; }
    public ICollection<ProjectAsset> Assets { get; set; } = [];
    public ICollection<ProjectMessage> Messages { get; set; } = [];
}
