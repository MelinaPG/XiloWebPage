namespace Xilo.Web.Data;

public class SupportTicket
{
    public int Id { get; set; }
    
    // Relación con el proyecto/website
    public int WebsiteId { get; set; }
    
    // Usuario que creó el ticket (Admin/Cliente)
    public string CreatedById { get; set; } = string.Empty;
    
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    
    // Categoría del ticket
    public string Category { get; set; } = "support"; // bug, feature, support, question, other
    
    // Prioridad
    public string Priority { get; set; } = "medium"; // low, medium, high, urgent
    
    // Estado del ticket
    public string Status { get; set; } = "open"; // open, in-progress, waiting-client, closed
    
    // Fechas
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }
    public DateTime? ClosedAt { get; set; }
    
    // SuperAdmin asignado (opcional)
    public string? AssignedToId { get; set; }
    
    // Navegación
    public Website Website { get; set; } = null!;
    public AppUser CreatedBy { get; set; } = null!;
    public AppUser? AssignedTo { get; set; }
    public ICollection<TicketComment> Comments { get; set; } = [];
    
    // Helper properties
    public bool IsClosed => Status == "closed";
    public string PriorityColor => Priority switch
    {
        "urgent" => "#ef4444", // red
        "high" => "#f97316",   // orange
        "medium" => "#eab308", // yellow
        "low" => "#22c55e",    // green
        _ => "#6b7280"
    };
    
    public string StatusLabel => Status switch
    {
        "open" => "Abierto",
        "in-progress" => "En Progreso",
        "waiting-client" => "Esperando Cliente",
        "closed" => "Cerrado",
        _ => Status
    };
    
    public string CategoryLabel => Category switch
    {
        "bug" => "Error/Bug",
        "feature" => "Nueva Funcionalidad",
        "support" => "Soporte",
        "question" => "Pregunta",
        "other" => "Otro",
        _ => Category
    };
}

public class TicketComment
{
    public int Id { get; set; }
    public int TicketId { get; set; }
    public string AuthorId { get; set; } = string.Empty;
    public string AuthorName { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public bool IsFromTeam { get; set; } // true = SuperAdmin, false = cliente
    
    // Navegación
    public SupportTicket Ticket { get; set; } = null!;
    public AppUser Author { get; set; } = null!;
}
