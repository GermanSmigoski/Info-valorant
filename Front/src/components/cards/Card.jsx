import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAgents } from "../../Redux/Actions";
import "./Card.css";

export const Card = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAgents());
  }, []);
  const agents = useSelector((state) => state.agents);
  console.log(agents);
  return (
    <div className="card-grid">
      {agents.map((agent) => (
        <div key={agent.uuid} className="card">
          <div className="card-back">
            <h2 className="card-title-back">{agent.name}</h2>
            <img className="big-img" src={agent?.agentImage} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};
