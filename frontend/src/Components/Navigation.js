import { Link } from "react-router-dom";

export default function PlayerNavigation() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ padding: "10px", backgroundColor: "#343a40" }}
    >
      <div className="container-fluid" style={{ display: "flex", alignItems: "center" }}>
        <h1 className="navbar-brand" style={{ color: "#fff", margin: "0 20px 0 0" }}>
          Chess
        </h1>

        <div className="navbar-nav" style={{ display: "flex", gap: "10px" }}>
          <Link to="/" className="nav-link" style={{ color: "#adb5bd" }}>
            Home
          </Link>
          <Link to="/players" className="nav-link" style={{ color: "#adb5bd" }}>
            Performance
          </Link>
          <Link to="/aboveavg" className="nav-link" style={{ color: "#adb5bd" }}>
            Above average
          </Link>
          <Link to="/country" className="nav-link" style={{ color: "#adb5bd" }}>
            Get by country
          </Link>
          <Link to="/add" className="nav-link" style={{ color: "#adb5bd" }}>
            Add Match
          </Link>
        </div>
      </div>
    </nav>
  );
}
