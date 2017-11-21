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
            <button className="bttn-minimal bttn-md bttn-no-outline" onClick={() => store.changeSpeed()}>
              Speed: {'-'.repeat(store.speedIndex + 1)}
            </button><br />
            <button className="bttn-minimal bttn-md bttn-no-outline" onClick={() => store.isKeyboardUp = !store.isKeyboardUp}>
              {store.isKeyboardUp ? 'Keyboard: ↑' : 'Keyboard: ↓'}
            </button><br />
            <button className="bttn-minimal bttn-md bttn-no-outline" onClick={() => store.clearNotes()}>
              Clear
            </button><br />
          </div>
          <button className="bttn-stretch bttn-sm" >
            User Center
          </button> 
        </div>
        <div id="Song">
          <div style={{color: '#f0f0f0', fontSize: '20', width: 940, margin: '0 auto'}}>
            Name of the song will be here
            {/* <button className="bttn-stretch bttn-md bttn-no-outline">
              save
            </button> */}
          </div>
          <Song store={store} />
        </div>
        {/* <mobxDevtools.default /> */}
      </div>
    );
  }
}

export default App;
