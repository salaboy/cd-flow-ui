import React, {
    Component
} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
  } from "react-router-dom";

export default class Projects extends Component {

    render() {
        return (
            <div>
                <h2>Projects</h2>
                <ul>
                    <li><Link to="/project/a">Project A</Link></li>
                    <li><Link to="/project/b">Project B</Link></li>
                </ul>



            </div>
        );
    }
}