import React from "react";
import './allMaps.css'

const AllMaps = ({ maps }) => {
  return (
    <div className="card-grid">
      {maps.map((map) => (
        <div className="card" key={map.id}>
          <div className="card-image">
            <img src={map.image} alt={`${map.name} image`} />
          </div>
          <div className="card-content">
            <h2>{map.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllMaps;
