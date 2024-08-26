using System.Numerics;
using chess.Models;
namespace chess.DAO
{
    public interface IChessDAO
    {
        Task<bool> AddMatch(AddMatchRequest request);

        Task<List<Player>> GetPlayersByCountry(string country, bool isDesc);

        Task<List<PlayerPerformance>> GetPlayerPerformances();

        Task<List<PlayerPerformance>> GetPlayersWithMostWins();

    }

}
