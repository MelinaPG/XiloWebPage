using Microsoft.AspNetCore.Identity;

namespace Xilo.Web.Data;

public class AppUser : IdentityUser
{
    public string FullName { get; set; } = string.Empty;
}
