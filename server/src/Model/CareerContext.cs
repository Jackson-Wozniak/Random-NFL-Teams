using server.Enum;

namespace server.Model;

public class CareerContext
{
    public PlayerPosition Position { get; set; }
    public bool DestinationIsTeam { get; set; }
    public string Destination { get; set; }
    public int StartingOverall { get; set; }
    public string StartingDevTrait { get; set; }
}