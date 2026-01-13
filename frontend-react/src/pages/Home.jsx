import { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [search, setSearch] = useState("");
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/places?search=${search}`)
      .then(res => res.json())
      .then(data => setPlaces(data));
  }, [search]);

  return (
    <div className="container">
      <h1 className="title">🌍 Geo Tourism</h1>

      <input
        type="text"
        placeholder="Search city, state or place..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="places-grid">
        {places.map((p, i) => (
          <div className="place-card" key={i}>
            <h3>{p.name}</h3>
            <p>{p.category}</p>
            <span>⭐ {p.rating}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
