import { useState } from "react";
import { getCountry } from "../Services/ChessApiServices";

const CountryList = () => {
  const [country, setCountry] = useState("");
  const [countryList, setcountryList] = useState([]);

  const buttonHandler = async (e) => {
    e.preventDefault();
    if (country === "") {
      alert("Enter a country");
    } else {
      const getdata = async () => {
        let data3 = await getCountry(country);
        if (data3 != null) {
          setcountryList(data3);
        }
      };
      getdata();
    }
  };

  return (
    <>
      <form
        className="form-group"
        style={{
          marginBottom: "20px",
          padding: "20px",
          border: "1px solid #ced4da",
          borderRadius: "5px",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label style={{ fontWeight: "bold", marginRight: "10px" }}>
            Country:
          </label>
          <input
            className="form-control"
            style={{
              display: "inline-block",
              width: "auto",
              marginLeft: "5px",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ced4da",
            }}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            type="text"
            placeholder=""
          />
        </div>

        <button
          className="btn btn-primary"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            borderColor: "#007bff",
            borderRadius: "4px",
          }}
          type="submit"
          onClick={buttonHandler}
        >
          Submit
        </button>
      </form>

      <h1 style={{ textAlign: "center", color: "#343a40", marginBottom: "20px" }}>
        List of Matches
      </h1>

      <div style={{ overflowX: "auto" }}>
        <table
          className="table table-striped"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "#fff",
          }}
        >
          <thead
            className="thead-dark"
            style={{ backgroundColor: "#343a40", color: "#fff" }}
          >
            <tr>
              <th style={{ padding: "10px", textAlign: "left" }}>#</th>
              <th style={{ padding: "10px", textAlign: "left" }}>Full Name</th>
              <th style={{ padding: "10px", textAlign: "left" }}>Last Name</th>
              <th style={{ padding: "10px", textAlign: "left" }}>Country</th>
              <th style={{ padding: "10px", textAlign: "left" }}>World Ranking</th>
              <th style={{ padding: "10px", textAlign: "left" }}>Total Matches</th>
            </tr>
          </thead>
          <tbody>
            {countryList.map((q, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #dee2e6" }}>
                <td style={{ padding: "10px", textAlign: "left" }}>{q.playerId}</td>
                <td style={{ padding: "10px", textAlign: "left" }}>{q.firstName}</td>
                <td style={{ padding: "10px", textAlign: "left" }}>{q.lastName}</td>
                <td style={{ padding: "10px", textAlign: "left" }}>{q.country}</td>
                <td style={{ padding: "10px", textAlign: "left" }}>{q.currentWorldRanking}</td>
                <td style={{ padding: "10px", textAlign: "left" }}>{q.totalMatchesPlayed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CountryList;
