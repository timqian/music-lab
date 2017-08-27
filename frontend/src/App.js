import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react';
import Song from './components/Song';

const mobxDevtools = require('mobx-react-devtools');

@observer // inform componenet when store updates
class App extends Component {

  render() {
    const store = this.props.store;

    return (
      <div className="App">
        <div className="App-header">
          Yiin Cloud<br />
          <button onClick={() => store.isPlaying = !store.isPlaying}>{`playing: ${store.isPlaying}`}</button><br />
          <button onClick={() => {
            store.keyboardRecordMode = !store.keyboardRecordMode;
            if (store.keyboardRecordMode) {
              store.isPlaying = true;
            } else {
              store.isPlaying = false;
            }

          }}>{`recording from keyboard: ${store.keyboardRecordMode}`}</button>
        </div>
        <div id="Song">
          <Song store={store} />
        </div>
        <mobxDevtools.default />
      </div>
    );
  }
}

export default App;
