import { useState } from "react";
import { addMatch } from "../Services/ChessApiServices";


const AddMatch = () => {
  const [match, setMatch] = useState({
    player1Id: "",
    player2Id: "",
    matchDate: "",
    matchLevel: "",
    winnerId: "",
});

  const onChange = (e) => {
    setMatch({ ...match, [e.target.id]: e.target.value });
  };

  async function handleSubmit(e)  {
    e.preventDefault();
    const res = await addMatch(match);
    console.log(res);

    if (!res) {
      alert("Match added successfully");
    } else {
      alert("Failed to add Match");
    }
  };

  return (
    <>
      <h1>Add a new Match</h1>
      <form className="form-group" >
        <div>
          Player 1 ID:{" "}
          <input
            className="form-control"
            value={match.player1Id}
            onChange={onChange}
            type="number"
            id="player1Id"
          />
        </div>
        <div>
        Player 2 ID: {" "}
          <input
            className="form-control"
            value={match.player2Id}
            onChange={onChange}
            type="number"
            id="player2Id"
          />
        </div>
        <div>
          Match Date :{" "}
          <input
            className="form-control"
            value={match.matchDate}
            onChange={onChange}
            type="text"
            id="matchDate"
          />
        </div>
        <div>
          Match Level:{" "}
          <input
            className="form-control"
            value={match.matchLevel}
            onChange={onChange}
            type="text"
            id="matchLevel"
          />
        </div>
        <div>
          Winner ID :{" "}
          <input
            className="form-control"
            value={match.winnerId}
            onChange={onChange}
            type="number"
            id="winnerId"
          />
        </div>

        <button
          className="btn btn-primary m-2 p-3"
          type="submit"
          onClick={handleSubmit}
        >
          Add new Match
        </button>
      </form>
    </>
  );
};
export default AddMatch;