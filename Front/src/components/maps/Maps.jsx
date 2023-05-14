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
          <div className="card-inner">
            <div
              className="card-front"
              style={{
                backgroundImage: "url(" + `${map.splash}` + ")",
                backgroundSize: "cover",
              }}
            >
              <h2 className="card-title">{map.displayName}</h2>
            </div>
            <div className="card-back">
              <img
                src={map.displayIcon ? map.displayIcon : ""}
                alt={map.displayName ? map.displayName : ""}
              ></img>
              <h2 className="card-title">{map.displayName}</h2>
              <p>{map.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
