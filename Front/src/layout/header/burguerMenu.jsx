import React, { useState } from "react";
import "./burguerMenu.css";
import { Link } from "react-router-dom";

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="burger-menu">
      <button className="burger-button" onClick={toggleMenu}>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </button>
      <ul className={isOpen ? "menu-open menu" : "menu-closed menu"}>
        <li>
          <Link to="/personajes">Personajes</Link>
        </li>
        <li>
          <Link to="/mapas">Mapas</Link>
        </li>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/armas">Armas</Link>
        </li>
        <li>
          <Link to="/sobreMi">Sobre Mi</Link>
        </li>
      </ul>
    </div>
  );
}
