import React from "react";

const Role = ({ role }) => {
  return (
    <div>
      <h1>Rol:</h1>
      <hr />
      {role && (
        <article className="role">
          <h3>{role[0]}</h3>
          <p>{role[1]}</p>
          <img src={role[2]} alt="" />
        </article>
      )}
    </div>
  );
};

export default Role;
