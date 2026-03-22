import "./Footer.css";
import logo from "../../assets/logok.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-left">
          <img className="footer-logo" src={logo} alt="Kasi Portfolio Logo" />

          <p>
            Full Stack Developer passionate about building
            modern, scalable, and user-friendly web applications.
            Let’s create something amazing together.
          </p>

          <div className="socials">
            <a
              href="https://www.linkedin.com/in/vatlapati-kasi-yella-rao-08372a227/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              in
            </a>

            <a
              href="https://github.com/kasiyellarao"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              GH
            </a>

            <a
              href="mailto:vatlapatikasi@gmail.com"
              className="social-btn"
            >
              @
            </a>

            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              X
            </a>
          </div>
        </div>

        {/* CENTER SECTION */}
        <div className="footer-center">
          <h3>Quick Links</h3>
          <span className="line"></span>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="footer-right">
          <h3>Get In Touch</h3>
          <span className="line"></span>

          <p>
            Open to freelance work and full-time opportunities.
            Feel free to reach out anytime.
          </p>

          <a href="mailto:vatlapatikasi@gmail.com">
            <button className="contact-btn">
              Say Hello 👋
            </button>
          </a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Kasi Yella Rao. All Rights Reserved.</p>
      </div>
    </footer>
  );
}