import { Component } from "react";


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
            Build {build}
          </div>
          <div className="pipeline-block__stages__stage">
            Test {test}
          </div>
          <div className="pipeline-block__stages__stage">
            Release {release}
          </div>
        </div>
        <div className="pipeline-block__duration">
          Duration: {pipeline}
        </div>

      </div>
    );
  }
}
