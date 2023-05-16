import React from "react";

const Agent = ({ name, image, description }) => {
  return (
    <div>
      <h1>{`Personaje: ${name}`}</h1>
      <hr />
      <article className="topPart">
        <img className="agent-face" src={image} alt="" />
        <p>{description}</p>
      </article>
    </div>
  );
};

export default Agent;
