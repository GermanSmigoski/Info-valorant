import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getWeapons } from "../../Redux/Actions";
import "./weapons.css";

export const Weapons = () => {
  const weapons = useSelector((state) => state.weapons);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeapons());
  }, []);

  const ordernar = () => {
    let ordenado = weapons.sort((a, b) => {
      if (a.id > b.id) return +1;
      if (a.id < b.id) return -1;
      return 0;
    });
    return ordenado;
  };
  return (
    <div className="card-grid">
      <Link to="/">
        <img className="backArrow" src="/arrow.png" alt="arrowBack" />
      </Link>
      {ordernar().map((weapon) => (
        <div className="card-weapon" key={weapon.id}>
          <Link to={`/${weapon.name}/skins`}>
            <h2 className="card-title">{weapon.name}</h2>
          </Link>
          <img src={weapon.image} alt={weapon.name}></img>
          {weapon.cost > 0 && <h3>Cost: {weapon.cost}</h3>}
          <h3>{weapon.category && `Category:${weapon?.category}`}</h3>
        </div>
      ))}
    </div>
  );
};
