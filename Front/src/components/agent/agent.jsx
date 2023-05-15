import React from "react";

const Agent = ({name, image, description}) => {
  return (
    <div>
      <h1>Personaje: </h1>
      <hr />
      <article className="topPart">
        <h2>{name}</h2>
        <img className="agent-face" src={image} alt="" />
        <p>{description}</p>
      </article>
    </div>
  );
};

export default Agent;
