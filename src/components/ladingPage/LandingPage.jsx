import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <section className="hero">
        <h1>¡Bienvenido a Valorant!</h1>
        <p>
          Descubre los personajes, mapas y armas más impresionantes del juego.
        </p>
        <button>Regístrate ahora</button>
      </section>
      <section className="features">
        <h2>Características</h2>
        <ul className="feature-list">
          <li>
            <h3>Personajes</h3>
            <p>
              Conoce a los personajes más interesantes de Valorant y sus
              habilidades únicas.
            </p>
          </li>
          <li>
            <h3>Mapas</h3>
            <p>
              Explora los mapas más fascinantes de Valorant y aprende a
              dominarlos.
            </p>
          </li>
          <li>
            <h3>Armas</h3>
            <p>
              Descubre las armas más poderosas de Valorant y aprende a
              utilizarlas.
            </p>
          </li>
        </ul>
      </section>
      <section className="cta">
        <h2>¿Listo para unirte?</h2>
        <button>Regístrate ahora</button>
      </section>
      <footer className="footer">
        <p>© 2023 Valorant. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
