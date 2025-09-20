// src/components/aboutComponents/whatWeDoAbout.js

import React from "react";
import whatWeDoImage from "../../static/about-placeholders/what-we-do/what-we-do-image.png";
import "../../styles/WhoWeAreAbout.scss";

class WhatWeDoAbout extends React.Component {
  render() {
    return (
      <div className="about-section-container">
        <div className="about-content">
          <div className="what-we-do-about">
            <div className="text-content">
              <h2 className="section-title">WHAT WE DO</h2>
              <p className="section-description">
                Each academic year, we release two issues—Fall/Winter and Spring/Summer—and organize a fashion show that showcases innovative pieces and compelling narratives, amplifying diverse voices. Explore our issues, meet our team, and discover TREND.
              </p>
            </div>
            <div className="image-placeholder-medium">
              <img src={whatWeDoImage} alt="What We Do" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatWeDoAbout;
