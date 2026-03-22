import React, { useState } from "react";
import "./TechStack.css";


import Backend from "../../assets/backend.png";
import Frontend from "../../assets/frontend.png";
import CMS from "../../assets/CMS.png";
import CloudTesting from "../../assets/cloudtesting.png";
import Databases from "../../assets/database.png";
import DevOps from "../../assets/devops.png";


const TechStack = () => {
  const categories = [
    { name: "Backend", image: Backend },
    { name: "Frontend", image: Frontend },
    { name: "Databases", image: Databases },
    { name: "CMS", image: CMS },
    { name: "CloudTesting", image: CloudTesting },
    { name: "DevOps", image: DevOps },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="techstack-container">
       {/* <div className="heading-underline"></div> */}
      {/* <h3 className="section-subtitle">Our</h3> */}
      <h2 className="section-title">Our Tech Stack</h2>

      <div className="techstack-nav">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className={`nav-item ${
              activeCategory.name === cat.name ? "active" : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="techstack-image">
        <img src={activeCategory.image} alt={activeCategory.name} />
      </div>
    </div>
  );
};

export default TechStack;
