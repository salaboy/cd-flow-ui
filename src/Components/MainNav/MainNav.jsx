import { Component } from "react";
import {
  Link
} from "react-router-dom";
import "./MainNav.scss";

export default class MainNav extends Component {
  render() {
    const { active } = this.props;

    let className = "main-nav";

    return (
      <div className={className}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/terminal">Terminal</Link>
          </li>
          <li>
            <Link to="/environments">Environments</Link>
          </li>
        </ul>
      </div>
    );
  }
}
