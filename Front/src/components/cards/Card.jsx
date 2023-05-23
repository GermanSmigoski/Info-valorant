import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllAgents } from "../../Redux/Actions";
import "./Card.css";

export const Card = () => {
  const [displayBanner, setDisplayBanner] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAgents());
  }, []);

  const handleImageClick = (agent) => {
    setDisplayBanner(agent);
    setShowBanner(true);
  };
  useEffect(() => {
    if (showBanner) {
      setTimeout(() => {
        setShowBanner(false);
      }, 500);
    }
  }, [showBanner]);

  const agents = useSelector((state) => state.agents);

  return (
    <div className="card-container">
      <div className="card-grid">
        {agents.map((agent) => (
          <div key={agent.uuid} className="card-agent">
            <img
              onClick={() => handleImageClick(agent)}
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
          <div
            className={`selected-agent ${showBanner ? "animated-slideIn" : ""}`}
          >
            <img src={displayBanner.agentBanner} alt="" />
            <h2>{displayBanner.name}</h2>
          </div>
        )}
      </div>
    </div>
  );
};
