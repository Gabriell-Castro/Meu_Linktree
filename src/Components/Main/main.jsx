import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import React from "react";
import "./index.css";

export const Main = () => {
  return (
    <>
      <main className="main">
        <section className="section-list-links">
          <ul className="list-links">
            <li className="item-link anima-esquerda ">
              <a
                href="https://linkedin.com/in/devgabriel0945"
                className="links"
                target="_blank"
              >
                <FaLinkedin />
                LINKEDIN
              </a>
            </li>
            <li className="item-link anima-direita">
              <a
                href="https://instagram.com/gabriel_castrop"
                className="links"
                target="_blank"
              >
                <FaInstagram />
                INSTAGRAM
              </a>
            </li>
            <li className="item-link anima-esquerda">
              <a
                href="https://github.com/Gabriell-Castro"
                className="links"
                target="_blank"
              >
                <FaGithub />
                GITHUB
              </a>
            </li>
            <li className="item-link anima-direita">
              <a
                href="https://wa.me/99991411157"
                className="links"
                target="_blank"
              >
                <FaWhatsapp />
                WHATSAPP
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};
