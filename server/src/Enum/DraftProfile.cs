namespace server.Enum;

public enum DraftProfile
{
    Elite,
    BlueChip,
    HiddenGem,
    Underdog,
    Undrafted
}

public static class DraftProfileUtils
{
    public static DraftProfile? FromString(string profile)
    {
        return profile.ToLower() switch
        {
            "elite" => DraftProfile.Elite,
            "bluechip" => DraftProfile.BlueChip,
            "hiddengem" => DraftProfile.HiddenGem,
            "underdog" => DraftProfile.Underdog,
            "undrafted" => DraftProfile.Undrafted,
            _ => null
        };
    }
}