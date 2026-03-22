import "./Records.css";

import webIcon from "../../assets/web.png";
import uiIcon from "../../assets/ui.png";
import migrateIcon from "../../assets/migration.png";

export default function Records() {
  return (
    <section className="records-section">

      <h2 className="records-title">“ My Records ”</h2>

      <div className="records-container">

        <div className="record-card">
          <div className="icon-box">
            <img src={webIcon} alt="Web Design" />
          </div>

          <h3>FrontEnd Development</h3>

          <div className="line-group">
            <span></span>
            <span></span>
          </div>

          <p className="count">3 + Projects Done</p>
        </div>


        <div className="record-card">
          <div className="icon-box">
            <img src={uiIcon} alt="UI/UX" />
          </div>

          <h3>UI/UX Design</h3>

          <div className="line-group">
            <span></span>
            <span></span>
          </div>

          <p className="count">1 + Projects Done</p>
        </div>


        <div className="record-card">
          <div className="icon-box">
            <img src={migrateIcon} alt="Migration" />
          </div>

          <h3>FullStack Website </h3>

          <div className="line-group">
            <span></span>
            <span></span>
          </div>

          <p className="count">1 + Projects Done</p>
        </div>

      </div>


      {/* Bottom dots like screenshot */}
      {/* <div className="dots">
        <span />
        <span className="active" />
        <span />
      </div> */}

    </section>
  );
}
