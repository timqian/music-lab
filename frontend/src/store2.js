import { observable, autorun } from 'mobx';
import { KEY_NUM , NUM_KEY_CODE_MAP, NUM_UP_KEY_CODE_MAP} from './config';
import { attackRow } from './utils/notePlayer.js'

const tmpPressedNotes = []
for (let i = 0; i < KEY_NUM; i++) {
  tmpPressedNotes.push(0);
}

// init notes2D
const notes2D = [];
for (let j = -1; j < 100; j++) {
  notes2D[j] = [];
  for (let i = 0; i < KEY_NUM; i++) {
    notes2D[j].push(0);
  }
}

const speedMap = [80, 60, 40, 20];

class Store {
  @observable notes2D;// 2D number array storing all the notes of a song
  @observable pressedNotes;
  @observable currentRow = -1; // current time
  @observable speedIndex = 1; // scroll 5 px
  @observable isPlaying = false;// update time if isPlaying is true
  @observable isRecording = false;// record to notes in respond to playing notes
  @observable isMouseDown = false;
  @observable isWriteKeyMode = false; // disable black key on Strap
  @observable isKeyboardUp = false; // position of the keyboard

  clearNotes() {
    for(let i = 0; i < this.notes2D.length; i++) {
      for(let j = 0; j < this.notes2D[0].length; j++) {
        this.notes2D[i][j] = 0;
      }
    }
  }

  changeSpeed() {
    this.speedIndex = (this.speedIndex + 1) % 4;
  }

  constructor(notes2D, tmpPressedNotes) {
    this.notes2D = notes2D;
    this.pressedNotes = tmpPressedNotes;
    // autorun(() => console.log('isMouseDown in store', this.isMouseDown));

    // play the Row
    let lastRow;
    autorun(() => {
      // console.log('current row in store', this.currentRow);
      if(this.currentRow !== lastRow) {
        attackRow(this.notes2D[this.currentRow], this.notes2D[lastRow]);
        lastRow = this.currentRow;
      }
    });
    
    // scroll the strap
    let handeler;
    autorun(() => {
      if (this.isPlaying) {
        clearInterval(handeler);
        const element = document.querySelector('.strap');
        handeler = setInterval(()=>{
            element.scrollTop += 5;
        }, speedMap[this.speedIndex]);
      } else {
        clearInterval(handeler);
      }
    });

    //record from keyboard
    autorun (() => {
      if (this.currentRow !== -1) {
        this.pressedNotes.forEach((note, i) => {
          if(note !== 0) this.notes2D[this.currentRow][i] = note;
        });
      }
    });
    
    autorun(()=>{
      if (this.currentRow >= this.notes2D.length && this.isKeyboardUp === false) this.isPlaying = false;
      if (this.currentRow >= this.notes2D.length && this.isKeyboardUp === true) {
        this.isPlaying = false;
        document.querySelector('.strap').scrollTop += 100;
      }
    });

    let lastPressedNotes;
    autorun (()=>{
      attackRow(this.pressedNotes, lastPressedNotes);
      lastPressedNotes = JSON.parse(JSON.stringify(this.pressedNotes));
    });

    let noteMark = 1;
    autorun(() => {
      // if (this.isKeyboardUp) {
        window.addEventListener('keyup', e => {
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

const store = new Store(notes2D, tmpPressedNotes);

export default store;