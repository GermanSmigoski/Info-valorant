import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAgentByName } from "../../Redux/Actions";

export const Agent = () => {
  const { nombre } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAgentByName(nombre));
  }, [dispatch, nombre]);

  const agent = useSelector((state) => state.agent);
  return (
    <div>
      {agent ? (
        <div>
          <h2>{agent.name}</h2>
          <p>{agent.description}</p>
          <img src={agent.agentImage} alt="" />
          <img src={agent.agentBanner} alt="" />
          <div style={{ backgroundImage: `url(${agent.background})` }}></div>
          {agent.role && (
            <div>
              <h3>{agent.role[0]}</h3>
              <p>{agent.role[1]}</p>
              <img src={agent.role[2]} alt="" style={{ filter: "invert(1)" }} />
            </div>
          )}

          <div>
            {agent.abilities?.map((ability) => (
              <div key={ability[0]}>
                <h3>{ability ? ability[0] : ""}</h3>
                <p>{ability ? ability[1] : ""}</p>
                <p>{ability ? ability[2] : ""}</p>
                <img
                  src={ability ? ability[3] : ""}
                  alt=""
                  style={{ filter: "invert(1)" }}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h1>Loading..</h1>
      )}
    </div>
  );
};
