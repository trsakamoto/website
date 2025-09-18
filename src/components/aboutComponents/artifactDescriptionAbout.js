// src/components/aboutComponents/artifactDescriptionAbout.js

import React from "react";

class ArtifactDescriptionAbout extends React.Component {
  render() {
    return (
      <div className="artifact-description-about" style={{
        padding: "40px 20px",
        backgroundColor: "#fff",
        minHeight: "200px"
      }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#333", textAlign: "center" }}>Artifact Details</h2>
        <p style={{ fontSize: "1.1rem", color: "#666", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
          Detailed descriptions and insights about our featured artifacts and projects.
        </p>
      </div>
    );
  }
}

export default ArtifactDescriptionAbout;
