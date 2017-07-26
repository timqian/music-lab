import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />  */}
          <h2>Music lab</h2>
        </div>

        <div className="keyboard">keyboard</div>
        <div className="soundFlow">
          <div className="keyboardFlow">keyboardFlow</div>
          <div className="voiceFlow">voiceFlow</div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      </div>
    );
  }
}

export default App;
