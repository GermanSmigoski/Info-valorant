import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./weapons.css";
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
      <Link to="/">
        <img className="backArrow" src="/arrow.png" alt="arrowBack" />
      </Link>
      {weapons.map((weapon) => (
        <div className="card-weapon" key={weapon.uuid}>
          <Link to={`/${weapon.displayName}/skins`}>
            <h2 className="card-title">{weapon.displayName}</h2>
          </Link>
          <img src={weapon.displayIcon} alt={weapon.displayName}></img>
        </div>
      ))}
    </div>
  );
};
