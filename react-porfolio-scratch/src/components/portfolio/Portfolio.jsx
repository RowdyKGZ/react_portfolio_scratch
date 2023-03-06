import React from "react";
import "./portfolio.css";
import screenSite from "../../assets/screen_site.jpg";

const data = [
  {
    id: 1,
    image: screenSite,
    title: "My web site HTML, CSS and REACT",
    github: "https://github.com/RowdyKGZ",
    demo: "https://github.com/RowdyKGZ",
  },
  {
    id: 2,
    image: screenSite,
    title: "My web site HTML, CSS and REACT",
    github: "https://github.com/RowdyKGZ",
    demo: "https://github.com/RowdyKGZ",
  },
  {
    id: 3,
    image: screenSite,
    title: "My web site HTML, CSS and REACT",
    github: "https://github.com/RowdyKGZ",
    demo: "https://github.com/RowdyKGZ",
  },
  {
    id: 4,
    image: screenSite,
    title: "My web site HTML, CSS and REACT",
    github: "https://github.com/RowdyKGZ",
    demo: "https://github.com/RowdyKGZ",
  },
  {
    id: 5,
    image: screenSite,
    title: "My web site HTML, CSS and REACT",
    github: "https://github.com/RowdyKGZ",
    demo: "https://github.com/RowdyKGZ",
  },
  {
    id: 6,
    image: screenSite,
    title: "My web site HTML, CSS and REACT",
    github: "https://github.com/RowdyKGZ",
    demo: "https://github.com/RowdyKGZ",
  },
];

function Portfolio() {
  return (
    <section id="section">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} rel="noreferrer" target="_blank" className="btn">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
