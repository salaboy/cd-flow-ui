import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./MainNav.scss";

export default class MainNav extends Component {
  render() {
    const { } = this.props;

    let className = "main-nav";

    return (
      <div className={className}>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName='link--active'>Dashboard</NavLink>
          </li>
          <li>
            <NavLink exact to="/projects" activeClassName='link--active'>Projects</NavLink>
          </li>
        {/*  <li>
            <NavLink exact to="/terminal" activeClassName='link--active'>Terminal</NavLink>
          </li> */}
          <li>
            <NavLink exact to="/environments" activeClassName='link--active'>Environments</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
