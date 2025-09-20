// src/components/aboutComponents/artifactNavAbout.js

import React from "react";
import "../../styles/ArtifactNavAbout.scss";

class ArtifactNavAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: 'fashion-shows' // Default active category
    };
  }

  handleCategoryClick = (category) => {
    this.setState({ activeCategory: category });
    // Pass the selected category to parent component
    if (this.props.onCategoryChange) {
      this.props.onCategoryChange(category);
    }
  };

  // Create single horizontal line
  getHorizontalLine = () => {
    return (
      <line
        x1="10%"
        y1="50%"
        x2="90%"
        y2="50%"
        className="active"
      />
    );
  };

  render() {
    const categories = [
      { id: 'fashion-shows', label: 'FASHION SHOWS' },
      { id: 'magazines', label: 'MAGAZINES' },
      { id: 'thrifty-thurs', label: 'THRIFTY THURS' },
      { id: 'collabs', label: 'COLLABS' }
    ];

    return (
      <div className="artifact-nav-about">
        <div className="artifact-nav-content">
          <div className="svg-navigation">
            {/* SVG Lines */}
            <svg className="navigation-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
              {this.getHorizontalLine()}
            </svg>

            {/* Navigation Buttons */}
            {categories.map((category) => (
              <button
                key={category.id}
                className={`nav-button ${category.id} ${this.state.activeCategory === category.id ? 'active' : ''}`}
                onClick={() => this.handleCategoryClick(category.id)}
              >
                <div className="button-circle"></div>
                <div className="button-text">{category.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ArtifactNavAbout;
