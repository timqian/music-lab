import React, { Component } from 'react';
import './App.css';
import './bttn.css'
import { observer } from 'mobx-react';
import Song from './components/Song';

// const mobxDevtools = require('mobx-react-devtools');

@observer // inform componenet when store updates
class App extends Component {

  render() {
    const store = this.props.store;

    return (
      <div className="App">
        <div className="App-header">
          <br />
          <div className="Control-panel">
            <button className="bttn-minimal bttn-md bttn-no-outline" onClick={() => store.isPlaying = !store.isPlaying}>
              {`${store.isPlaying ? 'Roll: ||' : 'Roll: ▶'}`}
            </button><br />
            <button className="bttn-minimal bttn-md bttn-no-outline" onClick={() => store.isKeyboardUp = !store.isKeyboardUp}>
              {store.isKeyboardUp ? 'Keyboard: ↑' : 'Keyboard: ↓'}
            </button>
          </div>
          <button className="bttn-stretch bttn-sm" >
            User Center
          </button> 
        </div>
        <div id="Song">
          <Song store={store} />
        </div>
        {/* <mobxDevtools.default /> */}
      </div>
    );
  }
}

export default App;
