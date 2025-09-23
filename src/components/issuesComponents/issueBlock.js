import React from "react";
import "../../styles/IssueBlock.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

class IssueBlock extends React.Component {

  render () {
    return (
      <div className="issue-container" onClick={this.props.onClick}>
        <div className="issue-image-container">
          <LazyLoadImage className="issue-image" src={this.props.picture} alt={this.props.title} />
        </div>
      </div>
    )
  }
}

export default IssueBlock;