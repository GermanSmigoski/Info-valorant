import React from "react";

const Roles = ({ rolesImage, rolesName }) => {
  return (
    <div>
      {rolesImage.map((url) => (
        <img src={url} alt="" />
      ))}
      <h3 style={{color:'white'}}>{rolesName}</h3>
    </div>
  );
};

export default Roles;
