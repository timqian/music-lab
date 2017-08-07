import React, { Component } from 'react';
import './App.css';
import Keyboard from './Keyboard';
import store from './store.js';
import {observer} from 'mobx-react';

@observer // inform componenet when store updates
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          Music lab
        </div> 

        <div className="board"> 
          <Keyboard pressedArr={store.pressedArr} keyboardType = {store.keyboardType}/>
          {/* <div className="voiceBoard"></div> */}
        </div>  
        
         <div className="soundFlow"> 
          <div className="keyboardFlow">keyboardFlow</div>
          {/* <div className="voiceFlow">voiceFlow</div> */}
         </div> 
      </div>
    );
  }
}

export default App;
