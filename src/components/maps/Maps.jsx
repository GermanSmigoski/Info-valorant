import { useState, useEffect } from "react";

function Maps() {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/maps")
      .then((response) => response.json())
      .then((data) => setMaps(data.data));
  }, []);

  return (
    <div>
      {maps.map((map) => (
        <div className="card map-card">
          <div className="card-inner">
            <div className="card-front">
              <img
                className="card-img"
                src={map.splash}
                alt={map.displayName}
              />
              <h2 className="card-title">{map.displayName}</h2>
            </div>
            <div className="card-back">
              <h2 className="card-title">{map.displayName}</h2>
              <p>{map.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Maps;
