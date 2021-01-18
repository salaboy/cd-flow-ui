import React, {  Component } from 'react';
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import ModuleBlock from '../../Components/ModuleBlock/ModuleBlock'
import PipelineBlock from '../../Components/PipelineBlock/PipelineBlock'


export default class Metrics extends Component {

    constructor(props) {
        super(props);
        this.state = { metrics: [], isLoading: true };

        // this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('api/metrics/')
            .then(response => response.json())
            .then(data => this.setState({ metrics: data, isLoading: false }));


    }

    render() {
        const { metrics, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const metricsProjectsList = metrics.projectMetrics.map(project => {

            return (
              <tr key={project.projectName}>
                <td style={{ whiteSpace: 'nowrap' }}>{project.projectName}</td>

                <td>{
                project.moduleMetrics.map(module => {
                    return <div key={module.moduleName}> {module.moduleName}
                        <h3>Pipelines</h3>
                        <table border="1px" width="100%">
                            <thead>
                                <tr>
                                    <th width="20%">Id</th>
                                    <th>Build Time</th>
                                    <th>Tests Time</th>
                                    <th>Release Time</th>
                                    <th>Pipeline Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    module.pipelineMetrics.map(pr => {
                                        return <tr key={pr.pipelineId}>
                                            <td>{pr.pipelineId}</td>
                                            <td>{pr.buildTime}</td>
                                            <td>{pr.testsTime}</td>
                                            <td>{pr.releaseTime}</td>
                                            <td>{pr.pipelineTime}</td>
                                        </tr>
                            })
                            }
                        </tbody>
                    </table>
                    </div>
                  })}</td>
                </tr>)
                });

        const metricsList = metrics.projectMetrics.map(project => {
          return (
            <ProjectCard title={project.projectName} key={project.projectName}>
              {project.moduleMetrics.map(module => {
                return (
                  <ModuleBlock key={module.moduleName} title={module.moduleName}>
                    {
                      module.pipelineMetrics.map(pr => {
                        return (
                          <PipelineBlock
                            key={pr.pipelineId}
                            id={pr.pipelineId}
                            build={pr.buildTime}
                            test={pr.testsTime}
                            release={pr.releaseTime}
                            pipeline={pr.pipelineTime}
                          />

                          )
                        })
                    }
                  </ModuleBlock>
                )
              })}
            </ProjectCard>
          );

        });

        return (
          <div className="section section--screen">
              <div className="container">
                <div className="col col-twelve">
                  <h1>Projects Metrics</h1>
                  {metricsList}
                </div>
              </div>
          </div>
        );
      }
}
