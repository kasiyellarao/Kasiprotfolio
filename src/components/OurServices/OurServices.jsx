import React from "react";
import "./OurServices.css";

import cert1 from "../../assets/cert1.pdf";
import cert2 from "../../assets/cert2.pdf";
import cert3 from "../../assets/cert3.pdf";
import cert4 from "../../assets/cert4.pdf";
import cert5 from "../../assets/cert5.pdf";
import cert6 from "../../assets/cert6.pdf";
import cert7 from "../../assets/cert7.pdf";
import cert8 from "../../assets/cert8.pdf";
import cert9 from "../../assets/cert9.pdf";
import cert10 from "../../assets/cert10.pdf";
import cert11 from "../../assets/cert11.pdf";
import cert12 from "../../assets/cert12.pdf";
import cert13 from "../../assets/cert13.pdf";
import cert14 from "../../assets/cert14.pdf";

const services = [
  {
    title: "Embrizon Internship Training",
    pdf: cert1,
  },
  {
    title: "Network Fundamentals Certificate",
    pdf: cert2,
  },
  {
    title: "Ethical Hacking Certificate",
    pdf: cert3,
  },
  {
    title: " Cyber Security Certificate",
    pdf: cert4,
  },
  {
    title: " Graphic Design Certificate",
    pdf: cert5,
  },
  {
    title: "Object-Oriented Design Certificate",
    pdf: cert6,
  },
  {
    title: "HTML5  Certificate",
    pdf: cert7,
  },
  {
    title: "Embrizon Internship Frontend Certificate",
    pdf: cert8,
  },
  {
    title: "AR Development Techniques Certificate",
    pdf: cert9,
  },
  {
    title: "Database Management System  Certificate",
    pdf: cert10,
  },
  {
    title: "Data Structures Certificate",
    pdf: cert11,
  },
  {
    title: "Cloud Computing Certificate",
    pdf: cert12,
  },
   {
    title: "Web Programming Certificate",
    pdf: cert13,
  },
   {
    title: "Embrizon Internship Project Certificate",
    pdf: cert14,
  },
  
];

const OurServices = () => {
  return (
    <section className="services-section">

      <h2 className="services-title">
        “ <span>My Certificates</span> ”
      </h2>

      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>

            <h3>{item.title}</h3>

            <div className="underlines">
              <span></span>
              <span></span>
            </div>

            <a
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View Certificate
            </a>

          </div>
        ))}
      </div>

    </section>
  );
};

export default OurServices;