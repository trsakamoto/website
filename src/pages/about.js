// src/pages/about.js

import React from "react";
import HeaderAbout from "../components/aboutComponents/headerAbout";
import PhotoCarouselAbout from "../components/aboutComponents/photoCarouselAbout";
import WhoWeAreAbout from "../components/aboutComponents/whoWeAreAbout";
import WhatWeDoAbout from "../components/aboutComponents/whatWeDoAbout";
import ArtifactNavAbout from "../components/aboutComponents/artifactNavAbout";
import ArtifactDescriptionAbout from "../components/aboutComponents/artifactDescriptionAbout";

class About extends React.Component {
  render() {
    return (
      <div className="about-page">
        <PhotoCarouselAbout />
        <HeaderAbout />
        <WhoWeAreAbout />
        <WhatWeDoAbout />
        <ArtifactNavAbout />
        <ArtifactDescriptionAbout />
      </div>
    );
  }
}

export default About;
