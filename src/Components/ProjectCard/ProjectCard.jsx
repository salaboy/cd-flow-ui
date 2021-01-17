import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./ProjectCard.scss";

export default class ProjectCard extends Component {
  render() {
    const { status } = this.props;

    let className = "project-card";

    return (
      <div className={className}>
        
      </div>
    );
  }
}
