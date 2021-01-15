import './App.scss';
import React from "react";
import Projects from './Pages/Projects'
import Metrics from './Pages/Metrics'
import Project from './Pages/Project'
import MyTerminal from './Pages/Terminal'
import Websocket from 'react-websocket';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const {
  CloudEvent,
} = require("cloudevents");

function handleData(data){
  var jsonContent = JSON.parse(data);
  if (jsonContent["specversion"] === "1.0") {
    const ce = new CloudEvent(jsonContent);
    var data = "CloudEvent TYPE: " + ce.type + " - SOURCE: " + ce.source; 
    console.log(data);
  }else{
    console.log("Not a valid CE!");
    console.log(jsonContent);
  }
  
}


export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/terminal">Terminal</Link>
          </li>
          <li>
            <Link to="/environments">Environments</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        {/* <Websocket url='ws://localhost:8080/ws?sessionId=123' */}
        <Websocket url='ws://34.91.35.40.xip.io/ws?sessionId=123'
              onMessage={handleData.bind(this)}/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
            <Metrics />
          </Route>
          <Route path="/project/:projectId" component={Project}>
          
          </Route>
          <Route path="/environments">
            <Environments />
          </Route>
          <Route path="/terminal">
            <MyTerminal />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}




function Environments() {
  return (
    <div>
      <h2>Environments</h2>
    </div>
  );
}
