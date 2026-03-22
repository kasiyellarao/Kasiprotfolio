import "./CallToAction.css";
import bg from "../../assets/bg.png"; // use your own image

export default function CallToAction() {
  return (
    <section className="cta-section">
      <div
        className="cta-box"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="cta-overlay"></div>

        <div className="cta-content">
          <p className="cta-text">
            I’m currently open to full-stack developer opportunities. <br />
  Let’s connect and create impactful digital experiences.
          </p>

          <button className="cta-btn">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
