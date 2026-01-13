import { Link } from "react-router-dom";
import "./States.css";

const states = [
  "Karnataka",
  "Kerala",
  "Tamil Nadu",
  "Maharashtra",
  "Goa",
];

export default function States() {
  return (
    <div className="container">
      <h2 className="title">🗺️ Explore by State</h2>

      <div className="states-grid">
        {states.map(state => (
          <Link key={state} to={`/states/${state}`} className="state-card">
            {state}
          </Link>
        ))}
      </div>
    </div>
  );
}
