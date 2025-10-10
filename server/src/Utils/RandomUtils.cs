namespace server.Utils;

public static class RandomUtils
{
    private static readonly Random Random = new();

    public static int GetRandom(int lower, int upperInclusive)
    {
        return Random.Next(lower, upperInclusive + 1);
    }

    public static T RandomIndex<T>(this List<T> list)
    {
        return list[Random.Next(0, list.Count)];
    }
}