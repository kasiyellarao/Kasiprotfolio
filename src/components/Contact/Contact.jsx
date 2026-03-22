import React from "react";
import "./Contact.css";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";


export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-overlay">

        {/* TITLE */}
        <div className="contact-header">
          <span className="contact-tag">“ Get In Touch ”</span>
         <h2>Open to Opportunities</h2>
        </div>

        {/* CONTENT */}
        <div className="contact-content">

          {/* FORM CARD */}
          <div className="contact-form-card">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
            <textarea placeholder="Your Message" />

            <button className="send-btn">Send Now</button>
          </div>

          {/* INFO CARD */}
          <div className="contact-info-card">

            <div className="info-item">
              <div className="icon-circle">
                <FaPhone />
              </div>
              <div className="info-text">
                <h4>Call Anytime</h4>
                <p>+91 7036147910</p>
                <p>+91 8074863347</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-circle">
                <FaEnvelope />
              </div>
              <div className="info-text">
                <h4>Send Email</h4>
                <p>vatlapatikasi@gmail.com</p>
                <p>vatlapatikasi6@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-circle">
                <FaLocationDot />

              </div>
              <div className="info-text">
                <h4>Location</h4>
                <p>Hydarabad,</p>
                <p>Telangana - India.</p>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="follow">
              <h4>Follow us</h4>
              <div className="social-icons">
                <span><FaLinkedinIn /></span>
                <span><FaInstagram /></span>
                <span><FaFacebookF /></span>
                <span><FaXTwitter /></span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
