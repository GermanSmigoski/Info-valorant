import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./skins.css";

export const Skins = () => {
  const { typeWeapon } = useParams();
  const [skins, setSkins] = useState([]);
  const url = "https://valorant-api.com/v1/weapons/skins";
  const tipoDeArma = typeWeapon;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const skins = response.data.data;
        const skinsFiltradas = filtrarSkinsPorArma(skins, tipoDeArma);
        setSkins(skinsFiltradas);
      })
      .catch((error) => console.error(error));
  }, []);

  function filtrarSkinsPorArma(skins, tipoArma) {
    return skins.filter((skin) => skin.displayName?.includes(tipoArma));
  }

  return (
    <div className="card-grid">
      {skins?.map((skin) => (
        <div className="card-skin" key={skin.uuid}>
          <p>{skin.displayName}</p>
          <img
            src={skin.chromas[0] ? skin.chromas[0]?.fullRender : skin.chromas[0]?.displayIcon}
            alt={skin.displayName}
          />
          {console.log(skin.chromas)}
        </div>
      ))}
    </div>
  );
};
