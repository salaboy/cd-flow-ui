import './App.scss';
import React from "react";
import Projects from './Pages/Projects'
import Project from './Pages/Project'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/project/:projectId" component={Project}>
          
          </Route>
          <Route path="/environments">
            <Environments />
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


function Module() {
  // The <Route> that rendered this component has a
  // path of `/modules/:moduleId`. The `:moduleId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { moduleId } = useParams();

  return (
    <div>
      <h3>{moduleId}</h3>
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
