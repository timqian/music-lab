import React, { Component } from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import { observer } from 'mobx-react';
import Strap from './components/Strap';
import { KEY_NUM } from './config';
const mobxDevtools = require('mobx-react-devtools');

@observer // inform componenet when store updates
class App extends Component {

  render() {
    const store = this.props.store;

    return (
      <div className="App"
        onMouseDown={() => store.isMouseDown = true}
        onMouseUp={() => store.isMouseDown = false}
      >
        <div className="App-header">
          Music lab
        </div>

        <div className="board">
          <Keyboard pressedArr={store.notes2D[0]} isMouseDown={store.isMouseDown}/>
        </div>

        <div className="soundFlow">
          <Strap notes2D={store.notes2D} isMouseDown={store.isMouseDown}/>
        </div>
        <mobxDevtools.default />
      </div>
    );
  }
}

export default App;
