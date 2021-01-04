import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
 
class MyTerminal extends Component {
  showMsg = () => 'Hello World'

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Terminal
          startState='maximised'
          color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          watchConsoleLogging
        />
      </div>
    );
  }
}
 
export default MyTerminal;