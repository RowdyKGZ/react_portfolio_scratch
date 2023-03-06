import React from "react";
import "./experience.css";
import { AiFillCheckCircle } from "react-icons/ai";

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developer</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className="experiance__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experiance__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experiance__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experiance__details-icon" />
              <div>
                <h4>JQerry</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experiance__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* =========== BACKEND ============ */}
        <div className="experience__backend">
          <div className="experience__frontend">
            <h3>Backend Developer</h3>
            <div className="experience__content">
              <article className="experience__details">
                <AiFillCheckCircle className="experiance__details-icon" />
                <div>
                  <h4>NodeJS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <AiFillCheckCircle className="experiance__details-icon" />
                <div>
                  <h4>Python</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <AiFillCheckCircle className="experiance__details-icon" />
                <div>
                  <h4>Django</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <AiFillCheckCircle className="experiance__details-icon" />
                <div>
                  <h4>Realation DB</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <AiFillCheckCircle className="experiance__details-icon" />
                <div>
                  <h4>MongoDB</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
