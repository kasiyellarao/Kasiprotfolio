import "./Leaders.css";

import project1 from "../../assets/img.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/Screenshot 2026-03-23 120253.png";
import project6 from "../../assets/Screenshot 2026-03-23 120436.png";

export default function Projects() {
  const projects = [
 
    {
      title: "Company Website",
      image: project3,
      live: "https://kasi2nd.netlify.app/",
      github: "https://github.com/kasiyellarao",
    },
    {
      title: "NEXFROX Website",
      image: project4,
      live: "https://kasi3rd.netlify.app/",
      github: "https://github.com/kasiyellarao",
    },

       {
      title: "Calculator-fullStack",
      image: project5,
      live: "https://calculator-appkasi.netlify.app/",
      github: "https://github.com/kasiyellarao",
    },
    {
      title: "To-Do-List",
      image: project6,
      live: "https://to-do-list-kasiapp.netlify.app/",
      github: "https://github.com/kasiyellarao",
    },

       {
      title: "GameChanger Movie Gallery Website",
      image: project1,
      live: "https://gamechangeralbum.netlify.app/",
      github: "https://github.com/kasiyellarao",
    },
    {
      title: "Swiggy Clone",
      image: project2,
      live: "https://swiggyworld.netlify.app/",
      github: "https://github.com/kasiyellarao",
    },
  ];

  return (
    <section className="projects-wrapper">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <h4>{project.title}</h4>

            <div className="project-buttons">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <button className="live-btn">Live Demo</button>
              </a>

              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <button className="github-btn">GitHub</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
