// src/components/aboutComponents/headerAbout.js

import React from "react";
import headerCollage from "../../static/about-placeholders/header-collage/header-collage.png";
import "../../styles/HeaderAbout.scss";

class HeaderAbout extends React.Component {
  render() {
    return (
      <div className="header-about">
        <div className="header-about-content">
          <div className="header-image-section">
            <div className="image-collage">
              <img src={headerCollage} alt="TREND Magazine Collage" />
            </div>
          </div>
          <div className="header-text-section">
            <h1 className="trend-word">TREND</h1>
            <p className="trend-pronunciation">/trend/</p>
            <span className="trend-grammar">noun</span>
            <p className="trend-definition">
              a student-run fashion and lifestyle magazine at UC San Diego
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderAbout;
