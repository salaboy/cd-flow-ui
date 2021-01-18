import { Component } from "react";

import "./ProjectCard.scss";

export default class ProjectCard extends Component {
  render() {
    const { children, title } = this.props;

    let className = "project-card";

    return (
      <div className={className}>
        <div className="project-card__title">
          <h2>{title}</h2>
        </div>
        <div className="project-card__body">
          {children}
        </div>
      </div>
    );
  }
}
