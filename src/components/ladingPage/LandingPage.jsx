import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="hero">
        <div className="landingInfo"> 
          <h1>¡Bienvenido a Valorant!</h1>
          <p>
            Descubre los personajes, mapas y armas más impresionantes del juego.
          </p>
          {/* <button>Regístrate ahora</button> */}
        </div>
      </section>
      <section className="features">
        <h2>Características</h2>
        <ul className="feature-list">
          <li>
            <Link to="/personajes">
              <h3>Personajes</h3>
            </Link>
            <p>
              Conoce a los personajes más interesantes de Valorant y sus
              habilidades únicas.
            </p>
          </li>
          <li>
            <Link to="/mapas">
              <h3>Mapas</h3>
            </Link>
            <p>
              Explora los mapas más fascinantes de Valorant y aprende a
              dominarlos.
            </p>
          </li>
          <li>
            <Link to="/armas">
              <h3>Armas</h3>
            </Link>
            <p>
              Descubre las armas más poderosas de Valorant y aprende a
              utilizarlas.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};
