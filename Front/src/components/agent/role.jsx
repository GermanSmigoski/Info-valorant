import React from "react";

const Role = ({ name, image, description }) => {
  return (
    <div>
      <h1>Rol: {name}</h1>
      <hr />
      <article className="role">
        <img src={image} alt="" />
        <p>{description}</p>
      </article>
    </div>
  );
};

export default Role;
