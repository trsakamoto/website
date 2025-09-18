// src/components/aboutComponents/whatWeDoAbout.js

import React from "react";

class WhatWeDoAbout extends React.Component {
  render() {
    return (
      <div className="what-we-do-about" style={{
        padding: "40px 20px",
        backgroundColor: "#fff",
        borderBottom: "1px solid #e9ecef"
      }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#333", textAlign: "center" }}>What We Do</h2>
        <p style={{ fontSize: "1.1rem", color: "#666", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
          Explore our projects, initiatives, and the impact we're making in our community.
        </p>
      </div>
    );
  }
}

export default WhatWeDoAbout;
