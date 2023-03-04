import React from "react";
import { BsTelegram } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function HeaderSocial() {
  return (
    <div className="header__social">
      <a
        href="https://www.linkedin.com/in/элдияр-нарынбеков-173b24204/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/RowdyKGZ" target="_blank" rel="noreferrer">
        <AiFillGithub />
      </a>
      <a href="https://telegram.com/ely.som" target="_blank" rel="noreferrer">
        <BsTelegram />
      </a>
    </div>
  );
}

export default HeaderSocial;
