namespace Xilo.Web.Services;

/// <summary>
/// In-memory pub/sub for real-time chat between Blazor Server components.
/// </summary>
public class ChatNotifier
{
    private readonly Dictionary<int, List<Func<ChatEvent, Task>>> _subscribers = [];
    private readonly Lock _lock = new();

    public record ChatEvent(string Sender, string Body, string Time, bool IsTeam);

    public IDisposable Subscribe(int projectId, Func<ChatEvent, Task> handler)
    {
        lock (_lock)
        {
            if (!_subscribers.TryGetValue(projectId, out var list))
            {
                list = [];
                _subscribers[projectId] = list;
            }
            list.Add(handler);
        }
        return new Unsubscriber(() =>
        {
            lock (_lock)
            {
                if (_subscribers.TryGetValue(projectId, out var list))
                    list.Remove(handler);
            }
        });
    }

    public async Task Notify(int projectId, ChatEvent evt)
    {
        List<Func<ChatEvent, Task>> snapshot;
        lock (_lock)
        {
            if (!_subscribers.TryGetValue(projectId, out var list)) return;
            snapshot = [.. list];
        }
        foreach (var handler in snapshot)
        {
            try { await handler(evt); } catch { }
        }
    }

    private class Unsubscriber(Action onDispose) : IDisposable
    {
        public void Dispose() => onDispose();
    }
}
