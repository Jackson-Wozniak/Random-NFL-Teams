using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using server.Dto;
using server.Model;
using server.Service;

namespace server.Controller;

[ApiController]
[Route("api/[controller]")]
public class CareerController(
    CareerGeneratorService careerGeneratorService) : ControllerBase
{
    [HttpPost]
    public ActionResult<CareerContextDto> GenerateCareer([FromBody] CareerRulesDto request)
    {
        var rules = new CareerRules(request);
        return Ok(new CareerContextDto(careerGeneratorService.Generate(rules)));
    } 
}