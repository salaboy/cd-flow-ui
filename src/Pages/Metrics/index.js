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
