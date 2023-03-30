import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2023 Valorant. Todos los derechos reservados.</p>
      <div className="redes">
        <a href="https://github.com/GermanSmigoski" className="github" target='_blank'>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/german-smigoski-84323a252/" className="linkedIn" target='_blank'>
          LinkedIn
        </a>
        <a href="mailto:germanSmigoski2@gmail.com" className="gmail">
          Gmail
        </a>
      </div>
    </footer>
  );
};
