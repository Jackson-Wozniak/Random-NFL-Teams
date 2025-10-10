using server.Dto;
using server.Enum;

namespace server.Model;

public class CareerRules
{
    public PlayerPosition Position { get; set; }
    public DraftProfile DraftProfile { get; set; }
    public bool DoChooseTeam { get; set; }
    
    public CareerRules(CareerRulesDto dto)
    {
        var position = PlayerPositionUtils.FromString(dto.Position);
        var profile = DraftProfileUtils.FromString(dto.DraftProfile);
        if (position == null || profile == null) throw new Exception();
        Position = position.Value;
        DraftProfile = profile.Value;
        DoChooseTeam = dto.DoChooseTeam;
    }
}