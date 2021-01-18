import { Component } from "react";
import Icon from '../Icon/Icon'

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
               {build}
            </div>
          </div>
          <div className="pipeline-block__stages__stage">
            <div className="stage__title">
              <Icon circle /> Test
            </div>
            <div className="stage__graph">
               {test}
            </div>

          </div>
          <div className="pipeline-block__stages__stage">
            <div className="stage__title">
              <Icon circle /> Release
            </div>
            <div className="stage__graph">
               {release}
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
