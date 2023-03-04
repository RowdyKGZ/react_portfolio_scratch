import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpg";
import HeaderSocial from "./HeaderSocial";

function header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1>Edward</h1>
        <h5 className="text-light">Frontend Devops</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default header;
