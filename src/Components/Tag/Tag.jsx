import { Component } from "react";
import "./Tag.scss";

export default class Tag extends Component {
  render() {
    const { children, type } = this.props;

    let className = "tag" +
      (type ? " tag--" + type : "");

    return (
      <div className={className}>
        <h6>{children}</h6>
      </div>
    );
  }
}
