namespace server.Enum;

public enum PlayerPosition
{
    QB = 1,
    HB = 2,
    WR = 3,
    LB = 4,
    CB = 5
}

public static class PlayerPositionUtils
{
    public static PlayerPosition? FromString(string name)
    {
        return name.ToUpper() switch
        {
            "QB" => PlayerPosition.QB,
            "HB" => PlayerPosition.HB,
            "WR" => PlayerPosition.WR,
            "LB" => PlayerPosition.LB,
            "CB" => PlayerPosition.CB,
            _ => null
        };
    }
}