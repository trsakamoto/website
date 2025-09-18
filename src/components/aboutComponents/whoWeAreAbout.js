// src/components/aboutComponents/whoWeAreAbout.js

import React from "react";

class WhoWeAreAbout extends React.Component {
  render() {
    return (
      <div className="who-we-are-about" style={{
        padding: "40px 20px",
        backgroundColor: "#f8f9fa",
        borderBottom: "1px solid #e9ecef"
      }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#333", textAlign: "center" }}>Who We Are</h2>
        <p style={{ fontSize: "1.1rem", color: "#666", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
          Discover the story behind our organization and the values that drive us.
        </p>
      </div>
    );
  }
}

export default WhoWeAreAbout;
