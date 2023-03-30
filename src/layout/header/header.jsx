import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <Link to="/personajes">Personajes</Link>
          <Link to="/mapas">Mapas</Link>
          <Link to="/">Inicio</Link>
          <Link to="/armas">Armas</Link>
          <Link to="/leaderBoard">Leader Board</Link>
          <Link to="/sobreMi">Sobre Mi</Link>
        </nav>
      </header>
    </div>
  );
};
