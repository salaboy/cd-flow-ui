import { Component } from "react";
import "./TimeBarGraph.scss";

export default class TimeBarGraph extends Component {
  render() {
    const { children, time, max, average, data } = this.props;



    var status;
    if(time <= average ){
      status = "positive"
    }else {
      status = "negative"
    }

    var margin;


    var timeWidth = (time/max)*100;
    var averageWidth = ((average/max)*100) - timeWidth;

    const timeStyle = {
      width: timeWidth + "%"
    };
    const averageStyle = {
      width: averageWidth + "%"
    };

    let className = "time-bar-graph" +
      (status ? " time-bar-graph--" + status : "");

    return (
      <div className={className}>
        <div className="time-bar-graph__time" style={timeStyle}>
        </div>
        <div className="time-bar-graph__average" style={averageStyle}>
        </div>
        {data}
      </div>
    );
  }
}
