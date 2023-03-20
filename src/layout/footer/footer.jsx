import React from "react";

export const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        justifyItems: "center",
        alignItems: "center",
      }}
      className="footer"
    >
      <p>© 2023 Valorant. Todos los derechos reservados.</p>
      <div className="redes">
        <a href="" className="github">
          GitHub
        </a>
        <a href="" className="linkedIn">
          LinkedIn
        </a>
        <a href="" className="gmail">
          Gmail
        </a>
      </div>
    </footer>
  );
};
