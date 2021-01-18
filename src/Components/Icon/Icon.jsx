import { Component } from "react";
import "./Icon.scss";

export default class Icon extends Component {
  render() {
    const { children, type, circle } = this.props;

    let className = "icon" +
      (type ? " icon--" + type : "")+
      (circle ? " icon--circle" : "");

    return (
      <div className={className}>
        {children}
      </div>
    );
  }
}
