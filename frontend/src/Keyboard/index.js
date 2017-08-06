// keyboard with keys to be pressed down

import React, { Component } from 'react';
import './style.css'
import store from '../store.js'
// import Tone from 'tone';
// var synth = new Tone.FMSynth().toMaster()

export default class Board extends Component {

  componentDidMount() {
    document.querySelectorAll('.key').forEach((key,i) => {
      key.addEventListener('mousedown', ()=>{
        store.addNote(i);
      });

      key.addEventListener('mouseup', ()=>{
        store.deleteNote(i);
      });
      key.addEventListener('mouseleave', () => {
        store.deleteNote(i); 
      })
    })
  }

  render() {
    const pressedArr = this.props.pressedArr; //  [60, 61]
    const keyboardType = this.props.keyboardType;
    
    // press keys 
    const pressedKeys = [];
    for (let i = 0; i < 128; i++) {
      pressedKeys[i] = '';
    }
    pressedArr.forEach(keyNum => pressedKeys[keyNum] = 'onPress');

    // hide keys
    const hidedKeys = [];
    if (keyboardType === 'ELECTRONIC')
      for(let i = 0; i < 128; i++) {
        i < 36 || i > 96 ? hidedKeys[i] = 'Keyboard-hide' : hidedKeys[i] = '';
      }
    else if (keyboardType === 'PIANO') {
      for(let i = 0; i < 128; i++) {
        i < 21 || i > 108 ? hidedKeys[i] = 'Keyboard-hide': hidedKeys[i] = '';
      }
    }

    return (
      <div className='Keyboard-board'>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[0]} C ${pressedKeys[0]}` }> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[1]} Csharp ${pressedKeys[1]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[2]}  D ${pressedKeys[2]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[3]}  Dsharp ${pressedKeys[3]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[4]} E ${pressedKeys[4]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[5]} F ${pressedKeys[5]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[6]} Fsharp ${pressedKeys[6]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[7]} G ${pressedKeys[7]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[8]} Gsharp ${pressedKeys[8]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[9]} A ${pressedKeys[9]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[10]} Asharp ${pressedKeys[10]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[11]} B ${pressedKeys[11]}`}> </div>
        </div>

        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[12]} C ${pressedKeys[12]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[13]} Csharp ${pressedKeys[13]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[14]} D ${pressedKeys[14]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[15]} Dsharp ${pressedKeys[15]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[16]} E ${pressedKeys[16]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[17]} F ${pressedKeys[17]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[18]} Fsharp ${pressedKeys[18]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[19]} G ${pressedKeys[19]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[20]} Gsharp ${pressedKeys[20]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[21]} A ${pressedKeys[21]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[22]} Asharp ${pressedKeys[22]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[23]} B ${pressedKeys[23]}`}> </div>
        </div>

        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[24]} C ${pressedKeys[24]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[25]} Csharp ${pressedKeys[25]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[26]} D ${pressedKeys[26]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[27]} Dsharp ${pressedKeys[27]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[28]} E ${pressedKeys[28]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[29]} F ${pressedKeys[29]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[30]} Fsharp ${pressedKeys[30]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[31]} G ${pressedKeys[31]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[32]} Gsharp ${pressedKeys[32]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[33]} A ${pressedKeys[33]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[34]} Asharp ${pressedKeys[34]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[35]} B ${pressedKeys[35]}`}> </div>
        </div>

        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[36]} C ${pressedKeys[36]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[37]} Csharp ${pressedKeys[37]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[38]} D ${pressedKeys[38]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[39]} Dsharp ${pressedKeys[39]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[40]} E ${pressedKeys[40]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[41]} F ${pressedKeys[41]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[42]} Fsharp ${pressedKeys[42]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[43]} G ${pressedKeys[43]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[44]} Gsharp ${pressedKeys[44]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[45]} A ${pressedKeys[45]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[46]} Asharp ${pressedKeys[46]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[47]} B ${pressedKeys[47]}`}> </div>
        </div>

        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[48]} C ${pressedKeys[48]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[49]} Csharp ${pressedKeys[49]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[50]} D ${pressedKeys[50]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[52]} Dsharp ${pressedKeys[51]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[52]} E ${pressedKeys[52]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[53]} F ${pressedKeys[53]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[54]} Fsharp ${pressedKeys[54]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[55]} G ${pressedKeys[55]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[56]} Gsharp ${pressedKeys[56]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[57]} A ${pressedKeys[57]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[58]} Asharp ${pressedKeys[58]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[59]} B ${pressedKeys[59]}`}> </div>
        </div>

        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[60]} C ${pressedKeys[60]}`}></div>
          <div className={`Keyboard-blackKey key ${hidedKeys[61]} Csharp ${pressedKeys[61]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[62]} D ${pressedKeys[62]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[63]} Dsharp ${pressedKeys[63]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[64]} E ${pressedKeys[64]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[65]} F ${pressedKeys[65]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[66]} Fsharp ${pressedKeys[66]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[67]} G ${pressedKeys[67]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[68]} Gsharp ${pressedKeys[68]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[69]} A ${pressedKeys[69]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[70]} Asharp ${pressedKeys[70]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[71]} B ${pressedKeys[71]}`}> </div>
        </div>

        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[72]} C ${pressedKeys[72]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[73]} Csharp ${pressedKeys[73]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[74]} D ${pressedKeys[74]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[75]} Dsharp ${pressedKeys[75]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[76]} E ${pressedKeys[76]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[77]} F ${pressedKeys[77]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[78]} Fsharp ${pressedKeys[78]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[79]} G ${pressedKeys[79]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[80]} Gsharp ${pressedKeys[80]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[81]} A ${pressedKeys[81]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[82]} Asharp ${pressedKeys[82]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[83]} B ${pressedKeys[83]}`}> </div>
        </div>

        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[84]} C ${pressedKeys[84]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[85]} Csharp ${pressedKeys[85]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[86]} D ${pressedKeys[86]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[87]} Dsharp ${pressedKeys[87]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[88]} E ${pressedKeys[88]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[89]} F ${pressedKeys[89]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[90]} Fsharp ${pressedKeys[90]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[91]} G ${pressedKeys[91]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[92]} Gsharp ${pressedKeys[92]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[93]} A ${pressedKeys[93]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[94]} Asharp ${pressedKeys[94]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[95]} B ${pressedKeys[95]}`}> </div>
        </div>

        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[96]} C ${pressedKeys[96]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[97]} Csharp ${pressedKeys[97]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[98]} D ${pressedKeys[98]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[99]} Dsharp ${pressedKeys[99]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[100]} E ${pressedKeys[100]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[101]} F ${pressedKeys[101]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[102]} Fsharp ${pressedKeys[102]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[103]} G ${pressedKeys[103]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[104]} Gsharp ${pressedKeys[104]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[105]} A ${pressedKeys[105]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[106]} Asharp ${pressedKeys[106]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[107]} B ${pressedKeys[107]}`}> </div>
        </div>

        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[108]} C ${pressedKeys[108]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[109]} Csharp ${pressedKeys[109]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[110]} D ${pressedKeys[110]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[11]} Dsharp ${pressedKeys[111]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[112]} E ${pressedKeys[112]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[113]} F ${pressedKeys[113]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[114]} Fsharp ${pressedKeys[114]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[115]} G ${pressedKeys[115]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[116]} Gsharp ${pressedKeys[116]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[117]} A ${pressedKeys[117]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[118]} Asharp ${pressedKeys[118]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[119]} B ${pressedKeys[119]}`}> </div>
        </div>

        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[120]} C ${pressedKeys[120]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[121]} Csharp ${pressedKeys[121]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[122]} D ${pressedKeys[122]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[123]} Dsharp ${pressedKeys[123]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[124]} E ${pressedKeys[124]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[125]} F ${pressedKeys[125]}`}> </div>
          <div className={`Keyboard-blackKey key ${hidedKeys[126]} Fsharp ${pressedKeys[126]}`}> </div>
        </div>
        <div className='Keyboard-keyWrapper'>
          <div className={`Keyboard-writeKey key ${hidedKeys[127]} G ${pressedKeys[127]}`}> </div>
        </div>
      </div>
    )
  }
}