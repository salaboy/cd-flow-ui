import { Component } from "react";

import "./ModuleBlock.scss";

export default class ModuleBlock extends Component {
  render() {
    const { children, title } = this.props;

    let className = "module-block";

    return (
      <div className={className}>
        <div className="module-block__title">
          <h4>{title} <span>Passed</span></h4>
          <p className="p p-xs">salaboy/test-spring-cloud-connectors</p>
        </div>
        <div className="module-block__body">
          {children}
        </div>
      </div>
    );
  }
}
