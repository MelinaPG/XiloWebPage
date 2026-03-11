namespace Xilo.Web.Data;

public class ProjectMessage
{
    public int Id { get; set; }
    public int WebsiteId { get; set; }
    public string SenderId { get; set; } = string.Empty;
    public string SenderName { get; set; } = string.Empty;
    public bool IsFromTeam { get; set; }                      // true = XIPE team, false = client
    public string Body { get; set; } = string.Empty;
    public DateTime SentAt { get; set; } = DateTime.UtcNow;
    public bool ReadByAdmin { get; set; }                    // true = SuperAdmin has seen it

    public Website Website { get; set; } = null!;
    public AppUser Sender { get; set; } = null!;
}
