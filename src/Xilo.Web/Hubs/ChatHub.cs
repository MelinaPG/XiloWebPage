using Microsoft.AspNetCore.SignalR;

namespace Xilo.Web.Hubs;

public class ChatHub : Hub
{
    public async Task JoinProject(int projectId)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, $"project-{projectId}");
    }

    public async Task LeaveProject(int projectId)
    {
        await Groups.RemoveFromGroupAsync(Context.ConnectionId, $"project-{projectId}");
    }

    public async Task SendToProject(int projectId, string sender, string body, string time, bool isTeam)
    {
        await Clients.OthersInGroup($"project-{projectId}")
            .SendAsync("ReceiveMessage", sender, body, time, isTeam);
    }
}
