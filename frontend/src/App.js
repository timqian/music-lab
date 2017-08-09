import React, { Component } from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import store from './store.js';
import {observer} from 'mobx-react';
import Strap from './components/Strap';
import {KEY_NUM} from './config';

const notes2D = [[],[],[],[],[]];

for (let i = 0; i < KEY_NUM; i++) {
  notes2D[0].push(0);
  notes2D[1].push(0);
  notes2D[2].push(0);
  notes2D[3].push(0);
  notes2D[4].push(0);
}

@observer // inform componenet when store updates
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          Music lab
        </div> 

        <div className="board"> 
          <Keyboard pressedArr={store.pressedArr} />
        </div>  
        
         <div className="soundFlow"> 
           <Strap notes2D = {notes2D} /> 
         </div> 
      </div>
    );
  }
}

export default App;
