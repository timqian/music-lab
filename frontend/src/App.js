import React, { Component } from 'react';
import './App.css';
import Keyboard from './Keyboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Music lab</h2>
        </div> 

         <div className="board">
           <Keyboard pressedArr={[]} keyboardType = 'ELECTRONIC'/>
           <div className="voiceBoard"></div>
         </div> 
        
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
