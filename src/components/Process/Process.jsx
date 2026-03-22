import React from "react";
import "./Process.css";
import researchLogo from "../../assets/research.png"; // replace with your image
import designLogo from "../../assets/design.png"; // replace with your image
import developLogo from "../../assets/develop.png"; // replace with your image
import testLogo from "../../assets/test.png"; // replace with your image

const processSteps = [
  {
    id: 1,
    title: "FrontEnd",
    description:
      "HTML, CSS , JavaScript , Reactjs",
       skill1: " > HTML",
      skill2: "> CSS",
      skill3: "> JavaScript",
      skill4: "> Reactjs",
    logo: researchLogo,
  },
  {
    id: 2,
    title: "BackEnd",
    description:
      "Nodejs , Express.js ",
      skill1: " > NodeJs",
      skill2: "> Expressjs",
      skill3: "",
      skill4: "",
    logo: designLogo,
  },
  {
    id: 3,
    title: "Database",
    description:
      "MongoDB, Mysql",
       skill1: "> MongoDB",
      skill2: "> Mysql",
      skill3: "",
      skill4: "",
    logo: developLogo,
  },
  {
    id: 4,
    title: "Tools",
    description:
      "Git, GitHub, VS Code, Figma",
       skill1: "> Git",
      skill2: "> GitHub",
      skill3: "> VS Code",
      skill4: "> Figma",
    logo: testLogo,
  },
];

const Process = () => {
  return (
    <section className="process-section">
      <h2 className="process-title">“ Technical Skills ”</h2>
      <div className="process-cards">
        {processSteps.map((step) => (
          <div className="process-card" key={step.id}>
            <div className="process-card-logo">
              <img src={step.logo} alt={step.title} />
            </div>
            <span className="process-card-number">{`0${step.id}`}</span>
            <h3 className="process-card-title">{step.title}</h3>
             <div className="underlines">
              <span></span>
              <span></span>
            </div>
            <h2 className="process-card-desc">{step.skill1}</h2>
            <h2 className="process-card-desc">{step.skill2}</h2>
            <h2 className="process-card-desc">{step.skill3}</h2>
            <h2 className="process-card-desc">{step.skill4}</h2>
            {/* <h2 className="process-card-desc">{step.description}</h2> */}
            
          </div>
        ))}
      </div>
    </section>  
  );
};

export default Process;
