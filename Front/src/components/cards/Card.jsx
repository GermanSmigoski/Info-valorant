import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Card.css";

export const Card = () => {
  const [agents, setAgents] = useState([]);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://valorant-api.com/v1/agents?language=es-MX&isPlayableCharacter=true"
      )
      .then((response) => {
        setAgents(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="card-grid">
      {agents.map((agent) => (
        <div key={agent.uuid} className="card">
          <div className='card-inner'>
            <div className="card-front">
              <img className="card-img" src={agent.displayIcon} alt="" />
              <h2 className="card-title">{agent.displayName}</h2>
              <button onClick={() => setOpen(false)}>More info</button>
            </div>
            <div className="card-back">
              <h2 className="card-title-back">{agent.displayName}</h2>
              <img className="big-img" src={agent.fullPortrait} alt="" />
              <p>{agent.description}</p>
              <button onClick={() => setOpen(true)}>Back</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
