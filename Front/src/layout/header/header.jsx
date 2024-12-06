import React from "react";
import { Link } from "react-router-dom";
import { BurgerMenu } from "./burguerMenu";
import "./header.css";
import { Image } from "@mantine/core";

export const Header = () => {
  return (
    <div>
      <header className="header">
        <BurgerMenu className="burguer" />
        <Image src="./valorant.png" w={45} h={45} />
        <nav className="nav">
          <Link to="/personajes">Personajes</Link>
          <Link to="/mapas">Mapas</Link>
          <Link to="/home">Inicio</Link>
          <Link to="/armas">Armas</Link>
          <Link to="/sobreMi">Sobre Mi</Link>
        </nav>
      </header>
    </div>
  );
};
