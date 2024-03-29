import React from "react";
import "../style/contact-us.css";
import insta from "./insta.svg";
import linkedin from "./linkedin.svg";
import facebook from "./facebook.svg";

const contact_us = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-total">
        <div className="contact-us-set">
          <div className="contact-us-countries">
            <h3>CONTACTANOS</h3>
            <h4>USA-MX-COL</h4>
            <p>contact@5igsolutions.com</p>
          </div>
          <div className="contact-us-social">
            <h3>SIGUENOS EN</h3>
            <div className="contact-us-logos">
              <a href="https://www.instagram.com/5ig_solutions/" target="_blank" rel="noreferrer"><img src={insta} alt="Instagram" ></img></a>
              <a href="https://www.linkedin.com/company/5ig-solutions/about"  target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn"></img></a>
              <a href="https://www.facebook.com/profile.php?id=100087891016427"  target="_blank" rel="noreferrer"><img src={facebook} alt="Facebook"></img></a>
            </div>
          </div>
        </div>
        <div className="contact-us-forms">
          <form>
            <p>¿Quien nos escribe?</p>
            <input className="input-width" placeholder="Nombre"></input>
            <p>Regálanos tu correo</p>
            <input className="input-width" placeholder="E-mail"></input>
            <p>Déjanos tu mensaje</p>
            <input className="input-width" placeholder="Mensaje"></input>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact_us;
