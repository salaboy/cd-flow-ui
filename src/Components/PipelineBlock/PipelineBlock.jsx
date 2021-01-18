import { Component } from "react";
import Icon from '../Icon/Icon'
import TimeBarGraph from '../DataViz/TimeBarGraph/TimeBarGraph'

import "./PipelineBlock.scss";

export default class PipelineBlock extends Component {
  render() {
    const { children, id, title, build, test, release, pipeline } = this.props;

    let className = "pipeline-block";

    return (
      <div className={className}>
        <div className="pipeline-block__id">
          # {id}
        </div>
        <div className="pipeline-block__stages">
          <div className="pipeline-block__stages__stage">
            <div className="stage__title">
              <Icon circle /> Build
            </div>
            <div className="stage__graph">
              <TimeBarGraph data={build} time="60" max="120" average="90" />
            </div>
          </div>
          <div className="pipeline-block__stages__stage">
            <div className="stage__title">
              <Icon circle /> Test
            </div>
            <div className="stage__graph">
               <TimeBarGraph data={test} time="90" max="120" average="100"/>
            </div>

          </div>
          <div className="pipeline-block__stages__stage">
            <div className="stage__title">
              <Icon circle /> Release
            </div>
            <div className="stage__graph">
               <TimeBarGraph data={release}/>
            </div>

          </div>
        </div>
        <div className="pipeline-block__duration">
          <Icon /> Duration: {pipeline}
        </div>

      </div>
    );
  }
}
