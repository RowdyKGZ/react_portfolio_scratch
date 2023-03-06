import React from "react";
import { FaAward, FaUsers } from "react-icons/fa";
import { RiFolderUploadFill } from "react-icons/ri";
import ME from "../../assets/me.jpg";
import "./about.css";
function about() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="cintainer about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about_image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <FaAward className="about__icon" />
              <h5>Experince</h5>
              <small>1+ Years Working</small>
            </div>

            <div className="about__card">
              <FaUsers className="about__icon" />
              <h5>Client</h5>
              <small>10+ In my town</small>
            </div>

            <div className="about__card">
              <RiFolderUploadFill className="about__icon" />
              <h5>Project</h5>
              <small>10+ Completed</small>
            </div>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            voluptatibus veritatis, ut corrupti incidunt voluptates porro, error
            sunt nostrum animi quibusdam illo, modi esse nemo recusandae
            mollitia autem consectetur quaerat!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default about;
