using chess.DAO;
using chess.Models;
using Microsoft.AspNetCore.Mvc;

namespace chess.Controllers
{
    [Route("api/[controller]")]
    public class ChessController : ControllerBase
    {
        private readonly IChessDAO _repository;
        public ChessController(IChessDAO repository)
        {
            _repository = repository;
        }

        [HttpPost("match", Name = "AddMatch")]
        public async Task<IActionResult> AddMatch(AddMatchRequest request)
        {
            bool result = await _repository.AddMatch(request);
            if (result)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpGet("players/by-country", Name = "GetPlayersByCountry")]
        public async Task<IActionResult> GetPlayersByCountry([FromQuery] string country, [FromQuery] bool isDesc)
        {
            List<Player> players = await _repository.GetPlayersByCountry(country, isDesc);
            if (players.Count > 0)
            {
                return Ok(players);
            }
            else
            {
                return NotFound("No players found for the given country.");
            }
        }

        [HttpGet("players/performances", Name = "GetPlayerPerformances")]
        public async Task<IActionResult> GetPlayerPerformances()
        {
            List<PlayerPerformance> performances = await _repository.GetPlayerPerformances();
            if (performances.Count > 0)
            {
                return Ok(performances);
            }
            else
            {
                return NotFound("No player performances found.");
            }
        }

        [HttpGet("players/mostwins", Name = "GetPlayersWithMostWins")]
        public async Task<IActionResult> GetPlayersWithMostWins()
        {
            List<PlayerPerformance> players = await _repository.GetPlayersWithMostWins();
            if (players.Count > 0)
            {
                return Ok(players);
            }
            else
            {
                return NotFound("No players found.");
            }
        }
    }

}
