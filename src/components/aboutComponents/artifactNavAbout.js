// src/components/aboutComponents/artifactNavAbout.js

import React from "react";

class ArtifactNavAbout extends React.Component {
  render() {
    return (
      <div className="artifact-nav-about" style={{
        padding: "40px 20px",
        backgroundColor: "#f8f9fa",
        borderBottom: "1px solid #e9ecef"
      }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#333", textAlign: "center" }}>Our Artifacts</h2>
        <p style={{ fontSize: "1.1rem", color: "#666", textAlign: "center", maxWidth: "500px", margin: "0 auto" }}>
          Navigate through our collection of work and achievements.
        </p>
      </div>
    );
  }
}

export default ArtifactNavAbout;
