import React, { Component } from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import { observer } from 'mobx-react';
import Strap from './components/Strap';
const mobxDevtools = require('mobx-react-devtools');

@observer // inform componenet when store updates
class App extends Component {

  render() {
    const store = this.props.store;

    function handleScroll() {
      const currentPosition = document.querySelector('.soundFlow').scrollTop;
      const currentRow = Math.floor(currentPosition / 25);
      store.currentRow = currentRow;
    }

    return (
      <div className="App"
        onMouseDown={() => store.isMouseDown = true}
        onMouseUp={() => store.isMouseDown = false}
      >
        <div className="App-header">
          Music lab
        </div>

        <div className="board">
          <Keyboard pressedArr={store.notes2D[0]} isMouseDown={store.isMouseDown} />
        </div>

        <div className="soundFlow" onScroll={() => handleScroll()}>
          <Strap notes2D={store.notes2D} isMouseDown={store.isMouseDown} />
        </div>
        <mobxDevtools.default />
      </div>
    );
  }
}

export default App;
