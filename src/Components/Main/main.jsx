import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import React from "react";
import "./index.css";

export const Main = () => {
  return (
    <main className="main">
      <section className="section-list-links">
        <ul className="list-links">
          <li className="item-link">
            <a
              href="https://linkedin.com/in/devgabriel0945"
              className="links"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="icon" />
              Linkedin
            </a>
          </li>
          <li className="item-link">
            <a
              href="https://instagram.com/gabriel_castrop"
              className="links"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="icon" />
              Instagram
            </a>
          </li>
          <li className="item-link">
            <a
              href="https://github.com/Gabriell-Castro"
              className="links"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="icon" />
              Github
            </a>
          </li>
          <li className="item-link">
            <a
              href="https://wa.me/5599991411157?text=Olá+Gabriel,+vi+seu+perfil+no+linktree"
              className="links"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="icon" />
              Whatsapp
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};
