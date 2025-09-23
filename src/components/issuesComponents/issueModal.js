import React from "react";
import "../../styles/IssueModal.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

class IssueModal extends React.Component {
  componentDidMount() {
    // Store the current scroll position
    this.scrollY = window.scrollY;
    
    // Prevent body scrolling when modal is open
    document.body.style.position = 'fixed';
    document.body.style.top = `-${this.scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    // Re-enable body scrolling when modal is closed
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    
    // Restore scroll position
    window.scrollTo(0, this.scrollY);
  }

  render() {
    const { issue, onClose } = this.props;
    if (!issue) return null;
    return (
      <div className="issue-modal-overlay" onClick={onClose}>
        <div className="issue-modal-content" onClick={e => e.stopPropagation()}>
          <button className="issue-modal-close" onClick={onClose}>&times;</button>
          <div className="issue-modal-image-container">
            <LazyLoadImage className="issue-modal-image" src={issue.picture} alt={issue.title} />
          </div>
          <div className="issue-modal-content-container">
            <h2 className="issue-modal-title">{issue.title}</h2>
            <p className="issue-modal-description">{issue.description}</p>
            <button 
              className="issue-modal-button" 
              onClick={() => window.open(issue.link, '_blank')}
            >
              View Issue
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="11" height="11" fill="currentColor" className="arrow-icon">
                <path d="M3.41 2H16V0H1a1 1 0 0 0-1 1v16h2V3.41l28.29 28.3 1.41-1.41z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default IssueModal;