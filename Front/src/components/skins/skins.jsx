import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
    const meleeKnife = [
      "Blade",
      "Claw",
      "Hammer",
      "Karambit",
      "Axe",
      "Dagger",
      "Sword",
      "Butterfly",
      "Melee",
      "Knife",
      "Neptune Anchor",
      "Araxys Bio Harvester",
      "Power Fist",
      "Wrath",
      "Waveform",
      "Obsidiana",
      "Onimaru Kunitsuna",
      "Cane",
      "Hu Else",
      "Mace",
      "Balisong",
      "Prosperity",
      "Wand",
      "Relic of the Sentinel",
      "Baton",
      "Luna's Descent",
      "Artisan Foil",
      "Drill",
    ];
    if (tipoArma === "Melee") {
      return skins.filter((skin) => {
        return meleeKnife.some((knife) => skin.displayName?.includes(knife));
      });
    } else {
      return skins.filter((skin) => {
        return skin.displayName?.toLowerCase().includes(tipoArma.toLowerCase());
      });
    }
  }

  return (
    <div className="card-grid">
      <Link to="/armas">
        <img className="backArrow" src="/arrow.png" alt="arrowBack" />
      </Link>
      {skins?.map((skin) => (
        <div className="card-skin" key={skin.uuid}>
          <p>{skin.displayName}</p>
          <img
            src={
              skin.chromas[0]
                ? skin.chromas[0]?.fullRender
                : skin.chromas[0]?.displayIcon
            }
            alt={skin.displayName}
          />
          {console.log(skin.chromas)}
        </div>
      ))}
    </div>
  );
};
