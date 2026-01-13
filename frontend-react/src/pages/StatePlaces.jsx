import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./StatePlaces.css";

export default function StatePlaces() {
  const { state } = useParams();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/places?search=${state}`)
      .then((res) => res.json())
      .then((data) => setPlaces(data))
      .catch((err) => console.error(err));
  }, [state]);

  return (
    <div className="container">
      <h2 className="title">📍 {state}</h2>

      {places.length === 0 ? (
        <p className="no-places">No places found for this state.</p>
      ) : (
        <div className="places-grid">
          {places.map((p, i) => (
            <div className="place-card" key={i}>
              <h3>{p.name}</h3>
              <p>{p.category}</p>
              <span>⭐ {p.rating}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
