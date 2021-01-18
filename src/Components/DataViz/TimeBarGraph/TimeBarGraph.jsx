import { Component } from "react";
import "./TimeBarGraph.scss";

export default class TimeBarGraph extends Component {
  render() {
    const { children, status, data } = this.props;

    let className = "time-bar-graph" +
      (status ? " time-bar-graph--" + status : "");

    return (
      <div className={className}>
        {data}
      </div>
    );
  }
}
