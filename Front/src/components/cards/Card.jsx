import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllAgents } from "../../Redux/Actions";
import "./Card.css";

export const Card = () => {
  const [displayBanner, setDisplayBanner] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAgents());
  }, []);


  const agents = useSelector((state) => state.agents);

  return (
    <div className="card-container">
      <div className="card-grid">
        {agents.map((agent) => (
          <div key={agent.uuid} className="card">
            <img
              onClick={() => setDisplayBanner(agent)}
              className="character-img"
              src={agent?.agentImage}
              alt=""
            />
            <Link to={`/personajes/${agent.name}`}>
              <h2 className="card-title-back">{agent.name}</h2>
            </Link>
          </div>
        ))}
      </div>
      <div className="full-banner">
        {displayBanner && (
          <div className="selected-agent">
            <img src={displayBanner.agentBanner} alt="" />
            <h2>{displayBanner.name}</h2>
          </div>
        )}
      </div>
    </div>
  );
};
