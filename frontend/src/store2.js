import { observable, autorun } from 'mobx';
import { KEY_NUM , NUM_KEY_CODE_MAP, NUM_UP_KEY_CODE_MAP} from './config';
import {attackRow, attack} from './utils/notePlayer.js'

let handeler;

const tmpPressedNotes = []
for (let i = 0; i < KEY_NUM; i++) {
  tmpPressedNotes.push(0);
}

class Store {
  @observable notes2D;// 2D number array storing all the notes of a song
  @observable pressedNotes;
  @observable currentRow = -1; // current time
  @observable bmp = 80; // beats per minites (scroll spead)
  @observable isPlaying = false;// update time if isPlaying is true
  @observable isRecording = false;// record to notes in respond to playing notes
  @observable isMouseDown = false;
  @observable isWriteKeyMode = false; // disable black key on Strap
  @observable keyboardRecordMode = false; 

  constructor(notes2D) {
    this.notes2D = notes2D;
    this.pressedNotes = tmpPressedNotes;
    // autorun(() => console.log('isMouseDown in store', this.isMouseDown));

    // play the Row
    autorun(() => {
      // console.log('current row in store', this.currentRow);
      attackRow(this.notes2D[this.currentRow], this.notes2D[this.currentRow-1]);
    });
    
    // play the sound strap
    autorun(() => {
      if (this.isPlaying) {
        const element = document.querySelector('.strap');
        handeler = setInterval(()=>{
            element.scrollTop += 5;
        }, 50);
      } else {
        clearInterval(handeler);
      }
    });

    let lastPressedNotes;
    autorun (() => {
      if (this.currentRow !== -1 && this.keyboardRecordMode) {
        this.pressedNotes.forEach((note, i) => {
          if(note !== 0) this.notes2D[this.currentRow][i] = note;
        });
      } else {
        attackRow(this.pressedNotes, lastPressedNotes);
        lastPressedNotes = JSON.parse(JSON.stringify(this.pressedNotes));
      }
    });

    let noteMark = 1;
    autorun(() => {
      // if (this.keyboardRecordMode) {
        window.addEventListener('keyup', e => {
          const keyNum = 0;
          const possibleUpKeyNum1 = NUM_UP_KEY_CODE_MAP.indexOf(e.keyCode);
          const possibleUpKeyNum2 = NUM_UP_KEY_CODE_MAP.lastIndexOf(e.keyCode); 
          this.pressedNotes[possibleUpKeyNum1] = 0;
          this.pressedNotes[possibleUpKeyNum2] = 0;
          noteMark++;
        });
        window.addEventListener('keypress', e => {
          const keyNum = NUM_KEY_CODE_MAP.indexOf(e.keyCode);
            this.pressedNotes[keyNum] = noteMark;
        })
      // }
    });
  }
}

// init notes2D
const notes2D = [];
for (let j = -1; j < 100; j++) {
  notes2D[j] = [];
  for (let i = 0; i < KEY_NUM; i++) {
    notes2D[j].push(0);
  }
}


const store = new Store(notes2D);


export default store;