import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Skins = () => {
  const { typeWeapon } = useParams();
  const [skins, setSkins] = useState([]);
  const url = "https://valorant-api.com/v1/weapons/skins";
  const tipoDeArma = typeWeapon;
  console.log(tipoDeArma)

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

  console.log(skins);
  return (
    <div className="card-grid">
      {skins?.map((skin) => (
        <div className="card map-card" key={skin.uuid}>
          <p>{skin.displayName}</p>
          <img
            src={skin.displayIcon ? skin.displayIcon : ""}
            alt={skin.displayName}
          />
        </div>
      ))}
    </div>
  );
};
