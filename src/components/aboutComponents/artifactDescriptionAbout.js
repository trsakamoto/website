// src/components/aboutComponents/artifactDescriptionAbout.js

import React from "react";
import artifactBackground from "../../static/about-placeholders/artifact-backgrounds/artifact-background.png";
import polaroid1 from "../../static/about-placeholders/polaroids/polaroid-1.jpg";
import polaroid2 from "../../static/about-placeholders/polaroids/polaroid-2.jpg";
import polaroid3 from "../../static/about-placeholders/polaroids/polaroid-3.jpg";
import polaroid4 from "../../static/about-placeholders/polaroids/polaroid-4.jpg";
import "../../styles/ArtifactDescriptionAbout.scss";

class ArtifactDescriptionAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: props.currentCategory || 'fashion-shows'
    };
  }

  // Content for each category
  getCategoryContent = () => {
    const content = {
      'fashion-shows': {
        subtitle: 'FASHION SHOWS',
        description: 'Each academic year, we release two issues—Fall/Winter and Spring/Summer—and organize a fashion show that showcases innovative pieces and compelling narratives, amplifying diverse voices. Explore our issues, meet our team, and discover TREND.',
        backgroundImage: 'fashion-shows-bg.jpg' // Figma asset placeholder
      },
      'magazines': {
        subtitle: 'MAGAZINES',
        description: 'Our biannual publications feature cutting-edge fashion editorials, student spotlights, and thought-provoking articles that capture the essence of campus culture and style.',
        backgroundImage: 'magazines-bg.jpg' // Figma asset placeholder
      },
      'thrifty-thurs': {
        subtitle: 'THRIFTY THURS',
        description: 'Weekly sustainable fashion events where students can discover unique pieces, learn about conscious consumption, and participate in our community-driven approach to style.',
        backgroundImage: 'thrifty-thurs-bg.jpg' // Figma asset placeholder
      },
      'collabs': {
        subtitle: 'COLLABS',
        description: 'Collaborative projects with local designers, photographers, and artists that push creative boundaries and showcase the diverse talent within our TREND community.',
        backgroundImage: 'collabs-bg.jpg' // Figma asset placeholder
      }
    };
    return content[this.state.currentCategory] || content['fashion-shows'];
  };

  componentDidUpdate(prevProps) {
    if (prevProps.currentCategory !== this.props.currentCategory) {
      this.setState({ currentCategory: this.props.currentCategory });
    }
  }

  render() {
    const content = this.getCategoryContent();

    return (
      <div className="artifact-description-about">
        {/* Background Asset */}
        <div className="background-asset"></div>

        <div className="artifact-description-content">
          <div className="artifact-main-content">
            {/* Left Image Collage */}
            <div className="left-image-collage">
              <div className="polaroid-image">
                <img src={polaroid1} alt="TREND Activity 1" />
              </div>
              <div className="polaroid-image">
                <img src={polaroid2} alt="TREND Activity 2" />
              </div>
              <div className="polaroid-image">
                <img src={polaroid3} alt="TREND Activity 3" />
              </div>
            </div>

            {/* Center Content */}
            <div 
              className="center-content"
              style={{
                backgroundImage: `url(${artifactBackground})`
              }}
            >
              <h2 className="category-subtitle">{content.subtitle}</h2>
              <div className="description-box">
                <p className="description-text">{content.description}</p>
              </div>
            </div>

            {/* Right Image */}
            <div className="right-image">
              <div className="single-polaroid">
                <img src={polaroid4} alt="TREND Activity 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtifactDescriptionAbout;
