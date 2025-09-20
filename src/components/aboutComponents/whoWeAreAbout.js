// src/components/aboutComponents/whoWeAreAbout.js

import React from "react";
import whoWeAreImage from "../../static/about-placeholders/who-we-are/who-we-are-image.png";
import "../../styles/WhoWeAreAbout.scss";

class WhoWeAreAbout extends React.Component {
  render() {
    return (
      <div className="about-section-container">
        <div className="about-content">
          <div className="who-we-are-about">
            <div className="text-content">
              <h2 className="section-title">WHO WE ARE</h2>
              <p className="section-description">
                TREND is a student-run fashion and lifestyle magazine at UCSD. As a vibrant collective of student artists, designers, writers, photographers, stylists, and marketing managers, we strive to capture the pulse of campus life and foster an inclusive community of creatives at UCSD.
              </p>
            </div>
            <div className="image-placeholder-large">
              <img src={whoWeAreImage} alt="Who We Are" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhoWeAreAbout;
