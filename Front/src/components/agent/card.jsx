import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAgentByName, getAllAgents } from "../../Redux/Actions";
import Abilities from "./abilites.jsx";
import Role from "./role";
import Agent from "./agent";
import "./agents.css";

export const CardAgent = () => {
  const { nombre } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentAgentIndex, setCurrentAgentIndex] = useState(0);
  useEffect(() => {
    dispatch(getAgentByName(nombre), getAllAgents());
  }, []);

  const agent = useSelector((state) => state.agent);
  const allAgents = useSelector((state) => state.agents);
  const grad = agent?.backgroundGradient || ["grey", "grey", "grey"];
  const allAgentsName = allAgents.map((a) => a.name);

  const nextAgent = async () => {
    const nextAgentIndex = (currentAgentIndex + 1) % allAgents.length;
    if (allAgentsName[nextAgentIndex] === agent.name) return;
    setCurrentAgentIndex(nextAgentIndex);
    const nextAgentName = allAgentsName[nextAgentIndex];
    dispatch(getAgentByName(nextAgentName));
    navigate(`/personajes/${nextAgentName}`);
  };
  const pastAgent = async () => {
    const previousAgentIndex =
      (currentAgentIndex - 1 + allAgents.length) % allAgents.length;
    if (previousAgentIndex === currentAgentIndex) return;
    setCurrentAgentIndex(previousAgentIndex);

    const previousAgent = allAgentsName[previousAgentIndex];
    dispatch(getAgentByName(previousAgent));
    navigate(`/personajes/${previousAgent}`);
  };

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
              name={agent?.name}
              image={agent?.agentImage}
              description={agent?.description}
            />
            {agent?.role && (
              <Role
                name={agent.role[0]}
                description={agent.role[1]}
                image={agent.role[2]}
              />
            )}
            <Abilities abilities={agent?.abilities} />
          </div>
          <div className="background-image">
            <img className="agent-banner" src={agent?.agentBanner} alt="" />
          </div>
        </div>
        <button onClick={pastAgent}>Past Agent</button>
        <button onClick={nextAgent}>Next Agent</button>
      </section>
    </div>
  );
};
