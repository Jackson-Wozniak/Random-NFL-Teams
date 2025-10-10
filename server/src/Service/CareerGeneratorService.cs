using server.Dto;
using server.Model;

namespace server.Service;

public class CareerGeneratorService
{
    public CareerContext Generate(CareerRules rules)
    {
        return new CareerContext();
    }
}