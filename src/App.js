import './App.scss';
import React from "react";
import { Component } from "react";
import MainNav from './Components/MainNav/MainNav'
import Home from './Pages/Home'
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


export default class App extends Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      terminalOpen: false
    };
  }

  toogleTerminal = () => {
    if (this.state.terminalOpen) {
      this.setState({
        terminalOpen: false,
      });
    } else {
      this.setState({
        terminalOpen: true,
      });
    }
  };

  render() {
    let className =
    "app" +
    (this.state.terminalOpen ? " app-terminal" : "") ;
    return (
      <Router>
        <div className={className}>
          <div className="app__content">
            <MainNav />

            {/*
              A <Switch> looks through all its children <Route>
              elements and renders the first one whose path
              matches the current URL. Use a <Switch> any time
              you have multiple routes, but you want only one
              of them to render at a time
            */}
            {/* <Websocket url='ws://localhost:8080/ws?sessionId=123' */}
            <Websocket url='ws://34.91.35.40/ws?sessionId=123'
                  onMessage={handleData.bind(this)}/>
            <Switch>
              <Route exact path="/">
                <Metrics />
              </Route>
              <Route path="/projects">
                <Projects />

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
          <div className="app__terminal">
            <div className="app__terminal__header" onClick={this.toogleTerminal}>
              { this.state.terminalOpen && (
                <h5>Close Terminal </h5>
              )}
              { !this.state.terminalOpen && (
                <h5>Open Terminal </h5>
              )}
            </div>
            <div className="app__terminal__body" >
              content
            </div>
          </div>
        </div>
      </Router>
    );
  }
}






function Environments() {
  return (
    <div>
      <h2>Environments</h2>
    </div>
  );
}
