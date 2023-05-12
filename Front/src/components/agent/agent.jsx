import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAgentByName } from "../../Redux/Actions";
import Abilities from "./abilites.jsx";
import Role from "./role";
import "./agents.css";

export const Agent = () => {
  const { nombre } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAgentByName(nombre));
  }, [dispatch, nombre]);

  const agent = useSelector((state) => state.agent);
  console.log(agent);
  const grad = agent.backgroundGradient || ["grey", "grey", "grey"];

  return (
    <div
      style={{
        background: `linear-gradient(${grad[0]}, ${grad[1]}, ${grad[2]})`,
      }}
      className="agent-container"
    >
      {agent ? (
        <div className="agent-details">
          <div>
            <h2>{agent.name}</h2>
            <img className="agent-face" src={agent.agentImage} alt="" />
            <p>{agent.description}</p>
            <Role role={agent.role} />
            <Abilities abilities={agent.abilities} />
          </div>
          <div className="background-image">
            <img src={agent.agentBanner} alt="" />
          </div>
        </div>
      ) : (
        <h1>Loading..</h1>
      )}
    </div>
  );
};
