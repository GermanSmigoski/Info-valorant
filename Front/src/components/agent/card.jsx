import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAgentByName } from "../../Redux/Actions";
import Abilities from "./abilites.jsx";
import Role from "./role";
import Agent from "./agent";
import "./agents.css";

export const CardAgent = () => {
  const { nombre } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAgentByName(nombre));
  }, [dispatch, nombre]);

  const agent = useSelector((state) => state.agent);
  const grad = agent.backgroundGradient || ["grey", "grey", "grey"];

  return (
    <div>
      <section
        className="agent-container"
        style={{
          backgroundImage: `linear-gradient(#${grad[0]},#${grad[1]},#${grad[2]},#${grad[3]})`,
        }}
      >
        <div className="agent-details">
          <div>
            <Agent
              name={agent.name}
              image={agent.agentImage}
              description={agent.description}
            />
            <Role role={agent.role} />
            <Abilities abilities={agent.abilities} />
          </div>
          <div className="background-image">
            <img src={agent.agentBanner} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};
