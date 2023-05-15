import React, { useState } from "react";

const Abilities = ({ abilities }) => {
  const [selectedAbility, setSelectedAbility] = useState(null);
  const defaultImage =
    "https://www.citypng.com/public/uploads/preview/-416031338016ay54imofx.png";
  const handleAbilityClick = (index) => {
    if (selectedAbility === index) {
      setSelectedAbility(null);
    } else {
      setSelectedAbility(index);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "8px",
        gap: "16px",
      }}
    >
      <h2 style={{ color: "white" }}>Habilidades:</h2>
      {abilities?.map((ability, index) => (
        <div className="abilities-container" key={index}>
          <img
            src={ability[3] ? ability[3] : defaultImage}
            alt=""
            style={{ margin: "5px", cursor: "pointer" }}
            onClick={() => handleAbilityClick(index)}
          />
          <div>
            {selectedAbility === index && (
              <ul>
                <li>{ability[2]}</li>
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Abilities;
