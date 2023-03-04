import React from "react";
import CV from "../../assets/resumeEdward.pdf";

function CTA() {
  return (
    <div className="CTA">
      <a href={CV} className="btn" download>
        Downoload CV
      </a>
      <a href="#contact" className="btn btn-primary">
        {" "}
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
