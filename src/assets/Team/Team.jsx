import React from "react";
import "./Team.css";

import chairman from "../../assets/chairman.png";
import ceo from "../../assets/ceo.png";
import cofounder from "../../assets/cofounder.png";
import android from "../../assets/android.png";
import manager from "../../assets/Managing Director.png";
import Software from "../../assets/Software Tester.png";
import cyber from "../../assets/sujjith.png";
import cybersecurity  from "../../assets/cyber security.png";

const teamMembers = [
  {
    name: "Mani Kumar",
    role: "Chairman",
    description:
      "Visionary leader, inspiring speaker, creative innovator, and strategic developer driving Engineers World’s growth and excellence",
    img: chairman,
  },
  {
    name: "Akshay Kumar",
    role: "Chief Executive Officer (CEO)",
    description:
      "Innovative leader in cybersecurity, cloud computing, and web development, shaping Engineers World’s future with boundless vision",
    img: ceo,
  },
  {
    name: "Mohammad Akheel",
    role: "Co-Founder",
    description:
      "Expert in Networking, Linux, and cloud technologies, with advanced AI/ML knowledge driving intelligent digital solutions",
    img: cofounder,
  },
  {
    name: "Juvvala Shiva Kesava Rao",
    role: "Android Developer",
    description:
      "Skilled in mobile app development, combining React.js and Spring Boot expertise to craft powerful digital experiences.",
    img: android,
  },
  {
    name: "Yaswanth Mandarapu ",
    role: "Managing Director",
    description: "Technical leader and Full Stack Developer with strong management expertise, driving growth through innovation and strategic leadership",
    img: manager, 
  },
  {
    name: "Karthik Boosa",
    role: "Software Tester",
    description: "Quality Assurance expert with strong skills in Java and Android development, ensuring flawless, reliable, and user-friendly solutions",
    img: Software,
  },
  {
    name: "Sujjith ",
    role: "Cyber Security Analyst",
    description: "Security expert proficient in digital forensics and penetration testing, ensuring robust protection and safeguarding digital assets",
    img: cyber,
  },
  {
    name: "Sridhar Akondi ",
    role: "Cyber Security Analyst",
    description: "Cybersecurity expert skilled in vulnerability assessment, penetration testing, and prompt engineering for AI-driven security solutions.",
    img: cybersecurity,
  },
];

const Team = () => {
  return (
    <div className="team-section">
      
      <h2 className="title">Our Team</h2>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} />
            <div className="card-info">
              <h4>{member.name}</h4>
              <p>{member.role}</p>
              <p className="description">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
