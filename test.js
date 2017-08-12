// import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// // import Tone from 'tone';
// // import MidiConvert from 'midiconvert'

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


// // var synth = new Tone.PolySynth(8).toMaster()

// // const midi = {
// //   "header": {
// //     "PPQ": 480,
// //     "bpm": 120, // beats per minute
// //     "name": ""
// //   },
// //   "startTime": 0,
// //   "duration": 4,
// //   "tracks": [
// //     {
// //       "startTime": 0,
// //       "duration": 4,
// //       "length": 3,
// //       "notes": [
// //         {
// //           "name": "C4",
// //           // "midi": 60,
// //           "time": 0,
// //           // "velocity": 1,
// //           "duration": 1
// //         },
// //         {
// //           "name": "D#4",
// //           // "midi": 63,
// //           "time": 0,
// //           "velocity": 1,
// //           "duration": 2
// //         },
// //         {
// //           "name": "C4",
// //           // "midi": 60,
// //           "time": 3,
// //           // "velocity": 1,
// //           "duration": 2.576
// //         }
// //       ],
// //       "controlChanges": {},
// //       "id": 0,
// //       "instrumentNumber": 32,
// //       "instrument": "acoustic bass",
// //       "instrumentFamily": "bass",
// //       "channelNumber": 0,
// //       "isPercussion": false
// //     }
// //   ]
// // };

// // // make sure you set the tempo before you schedule the events
// //   Tone.Transport.bpm.value = midi.header.bpm

// //   // pass in the note events from one of the tracks as the second argument to Tone.Part 
// //   new Tone.Part(function(time, note) {

// //     //use the events to play the synth
// //     synth.triggerAttackRelease(note.name, note.duration, time, note.velocity)

// //   }, midi.tracks[0].notes).start()

// //   // start the transport to hear the events
// //   Tone.Transport.start()
import React, { Component } from 'react';
const {observable, computed} = require('mobx');
const {observer} = require('mobx-react');

const mobxDevtools = require('mobx-react-devtools');

class Todo {
    id = Math.random();
    @observable title;
    @observable finished = false;
    constructor(title) {
        this.title = title;
    }
}

class TodoList {
    @observable todos = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}

const store = new TodoList();
store.todos.push(
    new Todo("Get Coffee"),
    new Todo("Write simpler code")
);
store.todos[0].finished = true;


@observer
class TodoListView extends Component {
    render() {
        return <div>
            <ul>
                {this.props.todoList.todos.map(todo => 
                    <TodoView todo={todo} key={todo.id} />
                )}
            </ul>
            Tasks left: {this.props.todoList.unfinishedTodoCount}
            <mobxDevtools.default />
        </div>
    }
}

const TodoView = observer(({todo}) => 
    <li>
        <input
            type="checkbox"
            checked={todo.finished}
            onClick={() => todo.finished = !todo.finished}
        />{todo.title}
    </li>
);



ReactDOM.render(<TodoListView todoList={store} />, document.getElementById('root'));



// For Eval button
window.store = store;
  
