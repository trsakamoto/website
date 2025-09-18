// src/components/aboutComponents/headerAbout.js

import React from "react";

class HeaderAbout extends React.Component {
  render() {
    return (
      <div className="header-about" style={{
        padding: "40px 20px",
        textAlign: "center",
        backgroundColor: "#f8f9fa",
        borderBottom: "2px solid #e9ecef"
      }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#333" }}>About Us</h1>
        <p style={{ fontSize: "1.2rem", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
          Learn more about our mission, vision, and the people behind our work.
        </p>
      </div>
    );
  }
}

export default HeaderAbout;
