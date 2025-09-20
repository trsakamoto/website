// src/components/contactComponents/socialLinks.js

import React from "react";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { SiSubstack } from "react-icons/si";
import contactPlaceholder2 from "../../static/contact-placeholders/contact-placeholder-2.png";
import '../../styles/Contact.scss';

class SocialLinks extends React.Component {
  render() {
    const facebook = "https://www.facebook.com/trenducsd/";
    const instagram = "https://www.instagram.com/trenducsd/";
    const substack = "https://trendmagazine.substack.com/";

    return (
      <div className="social-links-container">
        <div className="social-info">
          <h2>Stay up to date with us</h2>
          <div className="social-list">
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="social-item">
              <div className="social-icon instagram-icon">
                <BsInstagram />
              </div>
              <div className="social-text">
                <span className="social-platform">instagram</span>
                <span className="social-handle">@trendatucsd</span>
              </div>
            </a>
            <a href={facebook} target="_blank" rel="noopener noreferrer" className="social-item">
              <div className="social-icon facebook-icon">
                <BsFacebook />
              </div>
              <div className="social-text">
                <span className="social-platform">facebook</span>
                <span className="social-handle">/trenducsd</span>
              </div>
            </a>
            <a href={substack} target="_blank" rel="noopener noreferrer" className="social-item">
              <div className="social-icon substack-icon">
                <SiSubstack />
              </div>
              <div className="social-text">
                <span className="social-platform">substack</span>
                <span className="social-handle">trendmagazine.substack.com</span>
              </div>
            </a>
          </div>
        </div>
        <div className="social-placeholders">
          <div className="placeholder-box">
            <img src={contactPlaceholder2} alt="Contact placeholder" />
          </div>
        </div>
      </div>
    );
  }
}

export default SocialLinks;
