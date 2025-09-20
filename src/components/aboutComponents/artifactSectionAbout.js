// src/components/aboutComponents/artifactSectionAbout.js

import React from "react";
import ArtifactNavAbout from "./artifactNavAbout";
import ArtifactDescriptionAbout from "./artifactDescriptionAbout";
import "../../styles/ArtifactSectionAbout.scss";

class ArtifactSectionAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 'fashion-shows'
    };
  }

  handleCategoryChange = (category) => {
    this.setState({ selectedCategory: category });
  };

  render() {
    return (
      <div className="artifact-section-about">
        <ArtifactNavAbout onCategoryChange={this.handleCategoryChange} />
        <ArtifactDescriptionAbout currentCategory={this.state.selectedCategory} />
      </div>
    );
  }
}

export default ArtifactSectionAbout;
