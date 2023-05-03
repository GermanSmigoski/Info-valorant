import React from "react";
import { Link } from "react-router-dom";
import { BurgerMenu } from "./burguerMenu";
import "./header.css";

export const Header = () => {
  return (
    <div>
      <header className="header">
        <BurgerMenu className="burguer" />
        <nav className="nav">
          <Link to="/personajes">Personajes</Link>
          <Link to="/mapas">Mapas</Link>
          <Link to="/">Inicio</Link>
          <Link to="/armas">Armas</Link>
          <Link to="/sobreMi">Sobre Mi</Link>
        </nav>
      </header>
    </div>
  );
};
