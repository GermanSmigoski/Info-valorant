import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const Weapons = () => {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/weapons")
      .then((res) => {
        setWeapons(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="card-grid">
      {weapons.map((weapon) => (
        <div key={weapon.uuid}>
          <Link to={`/${weapon.displayName}`}>
            <h2>{weapon.displayName}</h2>
          </Link>
          <img src={weapon.displayIcon} alt={weapon.displayName}></img>
        </div>
      ))}
    </div>
  );
};
