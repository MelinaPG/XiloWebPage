namespace Xilo.Web.Data;

public class ProjectAsset
{
    public int Id { get; set; }
    public int WebsiteId { get; set; }
    public string FileName { get; set; } = string.Empty;
    public string StoredPath { get; set; } = string.Empty;   // relative path in wwwroot/uploads
    public long FileSize { get; set; }                        // bytes
    public string ContentType { get; set; } = string.Empty;
    public DateTime UploadedAt { get; set; } = DateTime.UtcNow;

    public Website Website { get; set; } = null!;
}
