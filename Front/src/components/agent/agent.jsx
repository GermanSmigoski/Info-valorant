import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAgentByName } from "../../Redux/Actions";
import Abilities from "./abilites.jsx";

export const Agent = () => {
  const { nombre } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAgentByName(nombre));
  }, [dispatch, nombre]);

  const agent = useSelector((state) => state.agent);
  console.log(agent.abilities);
  return (
    <div>
      {agent ? (
        <div>
          <h2>{agent.name}</h2>
          <p>{agent.description}</p>
          <img src={agent.agentImage} alt="" />
          <img src={agent.agentBanner} alt="" />
          {agent.role && (
            <div>
              <h3>{agent.role[0]}</h3>
              <p>{agent.role[1]}</p>
              <img src={agent.role[2]} alt="" style={{ filter: "invert(1)" }} />
            </div>
          )}
          {agent && agent.abilities ? (
            <Abilities abilities={agent.abilities} />
          ) : null}
        </div>
      ) : (
        <h1>Loading..</h1>
      )}
    </div>
  );
};
