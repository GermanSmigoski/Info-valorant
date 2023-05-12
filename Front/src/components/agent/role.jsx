import React from "react";

const Role = ({ role }) => {
  return (
    <div>
      {role && (
        <div>
          <h3>{role[0]}</h3>
          <img src={role[2]} alt="" style={{ filter: "invert(1)" }} />
          <p>{role[1]}</p>
        </div>
      )}
    </div>
  );
};

export default Role;
