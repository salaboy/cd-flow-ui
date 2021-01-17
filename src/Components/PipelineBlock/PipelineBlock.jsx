import { Component } from "react";

import "./PipelineBlock.scss";

export default class PipelineBlock extends Component {
  render() {
    const { children, title } = this.props;

    let className = "pipeline-block";

    return (
      <div className={className}>


          {children}
        
      </div>
    );
  }
}
