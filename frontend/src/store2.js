import { observable, autorun } from 'mobx';
import { KEY_NUM } from './config';
import {attackRow} from './utils/notePlayer.js'
// required states



// How to play notes?
// use PolySynth

let handeler;

class Store {
  @observable notes2D;// 2D number array storing all the notes of a song
  @observable currentRow = 0; // current time
  @observable bmp = 80; // beats per minites (scroll spead)
  @observable isPlaying = false;// update time if isPlaying is true
  @observable isRecording = false;// record to notes in respond to playing notes
  @observable isMouseDown = false;
  @observable isWriteKeyMode = false; // disable black key on Strap

  constructor(notes2D) {
    this.notes2D = notes2D;
    autorun(() => console.log('isMouseDown in store', this.isMouseDown));

    // play the Row
    autorun(() => {
      // console.log('current row in store', this.currentRow);
      attackRow(this.notes2D[this.currentRow], this.notes2D[this.currentRow-1]);
    });
    
    // play the sound strap
    autorun(() => {
      if (this.isPlaying) {
        const element = document.querySelector('.rowWrapper');
        handeler = setInterval(()=>{
          // if (element.scrollTop >0) {
            element.scrollTop += 1;
          // } else {
            // element.scrollTop = 0;
          // }
        }, 10);
      } else {
        clearInterval(handeler);
      }
    });
  }
}

// init notes2D
const notes2D = [];
for (let j = 0; j < 100; j++) {
  notes2D[j] = [];
  for (let i = 0; i < KEY_NUM; i++) {
    notes2D[j].push(0);
  }
}


const store = new Store(notes2D);


export default store;