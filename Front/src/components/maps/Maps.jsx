import { useState, useEffect } from "react";
import "./Maps.css";

export const Maps = () => {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/maps")
      .then((response) => response.json())
      .then((data) => setMaps(data.data));
  }, []);

  return (
    <div className="card-grid">
      {maps.map((map) => (
        <div className="card map-card">
          <div
            className="card-inner"
            style={{
              backgroundImage: "url(" + `${map.splash}` + ")",
              backgroundSize: "cover",
              borderRadius: "16px",
            }}
          >
            <h2 className="card-title">{map.displayName}</h2>
          </div>
          <h2 className="card-title">{map.displayName}</h2>
          <p>{map.description}</p>
        </div>
      ))}
    </div>
  );
};
