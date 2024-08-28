import { useState, useEffect } from "react";
import getPlayers from "../Services/ChessApiServices";

const PlayerList = () => {
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      let data = await getPlayers();
      if (data != null) {
        setPlayerList(data);
      }
    };
    getdata();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", color: "#343a40", margin: "20px 0" }}>
        List of Players: {playerList?.length}
      </h1>

      <div style={{ overflowX: "auto", margin: "0 10px" }}>
        <table
          className="table table-striped"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "20px",
            backgroundColor: "#f8f9fa",
          }}
        >
          <thead className="thead-dark" style={{ backgroundColor: "#343a40", color: "#fff" }}>
            <tr>
              <th style={{ padding: "10px", textAlign: "left" }}>#</th>
              <th style={{ padding: "10px", textAlign: "left" }}>Full Name</th>
              <th style={{ padding: "10px", textAlign: "left" }}># Matches</th>
              <th style={{ padding: "10px", textAlign: "left" }}>Wins</th>
              <th style={{ padding: "10px", textAlign: "left" }}>Win Rate</th>
            </tr>
          </thead>
          <tbody>
            {playerList.map((p, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #dee2e6" }}>
                <td style={{ padding: "10px", textAlign: "left" }}>{p.playerId}</td>
                <td style={{ padding: "10px", textAlign: "left" }}>{p.fullName}</td>
                <td style={{ padding: "10px", textAlign: "left" }}>{p.totalMatches}</td>
                <td style={{ padding: "10px", textAlign: "left" }}>{p.totalWins}</td>
                <td style={{ padding: "10px", textAlign: "left" }}>{p.winPercentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PlayerList;
