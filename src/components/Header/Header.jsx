import "./Header.css";
import logo from "../../assets/logok.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Nexfrox Logo" />
          </Link>
        </div>

        {/* NAVIGATION */}
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/team">Projects</Link>
         
          <Link to="/certificates">Certificates</Link>
           <Link to="/contact">contact</Link>

          {/* <Link to="/contact">
            <button className="cta-btn">Get In Touch</button>
          </Link> */}
          <a
  href="https://docs.google.com/forms/d/e/1FAIpQLScE1JowYBcK_dfuiQWPCao0dcXDl6O_JLbnFjWF1Mz2nLbyZw/viewform?fbzx=-1544233219614321402&edit2=2_ABaOnueL5W9gR2MoWJ2v-X6i2e_ho1D4wgNaGGv-eJz5scNWBZJG3zS_1k9nwVwoqQ"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="cta-btn">Get In Touch</button>
</a>
        </nav>

      </div>
    </header>
  );
}
