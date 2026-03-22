import "./About.css";
import Logo from "../../assets/kasilogo.png";

export default function About() {
  return (
    <section className="about-wrapper">

      <div className="about-frame">

      
        <div className="image-card">
          <img src={Logo} alt="About visual" />
        </div>

        
        <div className="about-content">

          <h2 className="about-tag">About Me</h2>

          <h2 className="about-title">
            Full Stack Developer building modern web applications.
          </h2>

          <p>
          I am a passionate Full Stack Developer with strong skills in modern 
          web technologies. I enjoy building responsive, user-friendly, and 
          scalable web applications using technologies like HTML, CSS, JavaScript, 
          React, Node.js, Express, and MongoDB.
         
           I completed a Web Developer Internship at Engineer’s World and developed 
           projects such as an E-commerce website, Swiggy clone, and Netflix clone. 
           I am always eager to learn new technologies and grow as a professional 
           developer.
          </p>

          {/* <button className="contact-btn">
            Get in Touch with Us
            <span>Contact : +91 9876543210</span>
          </button> */}

        </div>

      </div>

    </section>
  );
}
