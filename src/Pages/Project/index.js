import React, {
    Component,
} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    
  } from "react-router-dom";

export default class Project extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        console.log(this.props)
        
        return (
            <div>
                <h2>Project</h2>
                <h3>Id: {this.props.match.params.projectId}</h3>
            </div>
        );
    }
}