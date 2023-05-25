import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAgents } from "../../Redux/Actions";
import FullBanner from "./fullBanner";
import "./Card.css";
import Roles from "./roles";

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

  const setBannerFalse = () => {
    setShowBanner(false);
    setDisplayBanner(false);
  };
  useEffect(() => {
    if (showBanner) {
      setTimeout(() => {
        setShowBanner(false);
      }, 500);
    }
  }, [showBanner]);

  const agents = useSelector((state) => state.agents);
  const rolesName = [...new Set(agents.map((agent) => agent.role.name))];
  const rolesImage = [...new Set(agents.map((agent) => agent.role.image))];

  return (
    <div className="card-container">
      <div className="card-grid">
        <Roles style={{}} rolesImage={rolesImage} rolesName={rolesName} />
        {agents.map((agent) => (
          <div key={agent.uuid} className="card-agent">
            <img
              onMouseEnter={() => handleImageClick(agent)}
              onMouseLeave={() => setBannerFalse(agent)}
              className={`character-img`}
              src={agent?.agentImage}
              alt=""
            />
          </div>
        ))}
      </div>
      {displayBanner && (
        <FullBanner showBanner={showBanner} displayBanner={displayBanner} />
      )}
    </div>
  );
};
