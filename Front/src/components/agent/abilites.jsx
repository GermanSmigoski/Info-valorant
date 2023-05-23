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
    <div>
      <h1 style={{ color: "white" }}>Habilidades:</h1>
      <hr />
      <div style={{ display: "flex" }}>
        {abilities?.map((ability, index) => (
          <div className="abilities-container" key={index}>
            <img
              src={ability.image ? ability.image : defaultImage}
              alt=""
              style={{ margin: "7px", cursor: "pointer" }}
              onClick={() => handleAbilityClick(index)}
            />
            <div>
              <h2>{ability.name}</h2>
              <hr />
              {selectedAbility === index && (
                <ul>
                  <li>{ability.description}</li>
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Abilities;
