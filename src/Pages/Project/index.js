import React, {
    Component,
} from 'react';


export default class Project extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        
        const {match :{ params: { projectId}} } = this.props; 
        return (
            <div>
                <h2>Project</h2>
                <h3>Id: {projectId}</h3>
            </div>
        );
    }
}