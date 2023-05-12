import React, { useState } from "react";

const Abilities = ({ abilities }) => {
  const [selectedAbility, setSelectedAbility] = useState(null);

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
      {abilities?.map((ability, index) => (
        <div key={index}>
          <img
            src={ability[3]}
            alt=""
            style={{ filter: "invert(1)", margin: "5px", cursor: "pointer" }}
            onClick={() => handleAbilityClick(index)}
          />
          <div>{selectedAbility === index && <p>{ability[2]}</p>}</div>
        </div>
      ))}
    </div>
  );
};

export default Abilities;
