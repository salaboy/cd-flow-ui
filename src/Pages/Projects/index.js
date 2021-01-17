import React, {
    Component
} from 'react';


export default class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { projects: [], isLoading: true };
        // this.metrics = { metrics: [], isLoading: true}
        // this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('api/projects')
            .then(response => response.json())
            .then(data => this.setState({ projects: data, isLoading: false }));


    }

    render() {
        const { projects, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const projectsList = projects.map(project => {

            return <tr key={project.id}>
                <td style={{ whiteSpace: 'nowrap' }}>{project.name}</td>

                <td>{project.modules.map(module => {
                    return <div key={module.id}> {module.name} -&gt; {module.repoUrl}
                        <h3>Pipelines</h3>
                        <table border="1px" width="100%">
                            <thead>
                                <tr>
                                    <th width="20%">Id</th>
                                    <th>Status</th>
                                    <th>Artifacts</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    module.pipelineRuns.map(pr => {
                                        return <tr key={pr.id}>
                                            <td>{pr.id}</td>
                                            <td>{pr.status}</td>
                                            <td>
                                                    <h3>Artifact Events</h3>
                                                    <table border="1px" width="100%">
                                                        <thead>
                                                            <tr>
                                                                <th width="20%">Id</th>
                                                                <th>Type</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {pr.artifactEvents.map(ae => {
                                                                return <tr key={ae.id}>
                                                                    <td>{ae.id}</td>
                                                                    <td>{ae.type}</td>
                                                                </tr>

                                                            })
                                                            }
                                                         </tbody>
                                                </table>
                                            </td>
                                        </tr>
                            })
                            }
                        </tbody>
                    </table>
                    </div>
            })}</td>
          </tr>
                });

        return (
          <div>

            <div className="container">
              <div className="col col-twelve">
                <h2>Projects</h2>
                <table className="mt-4" border="1px" width="100%">
                    <thead>
                        <tr>
                            <th width="20%">Name</th>
                            <th>Modules</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projectsList}
                    </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      }
}
