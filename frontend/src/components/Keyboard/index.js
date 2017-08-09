// keyboard with keys to be pressed down

import React, { Component } from 'react';
import './style.css';
import {attack, release} from '../../utils/notePlayer.js';

export default class Board extends Component {

  componentDidMount() {
    document.querySelectorAll('.key').forEach((key,i) => {
      key.addEventListener('mousedown', () => {
        attack(i);
      });
      key.addEventListener('mouseup', () => {
        release();
      });
      key.addEventListener('mouseleave', () => {
        release();
      })
    })
  }

  render() {
    const pressedArr = this.props.pressedArr;

    const pressedKeys = pressedArr.map(isPress => isPress ? 'onPress' : '');

    return (
      <div className='Keyboard'>
        <div className='keyWrapper'>
          <div className={`writeKey key C ${pressedKeys[36-36]}`}> </div>
          <div className={`blackKey key Csharp ${pressedKeys[37-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key D ${pressedKeys[38-36]}`}> </div>
          <div className={`blackKey key Dsharp ${pressedKeys[39-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key E ${pressedKeys[40-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key F ${pressedKeys[41-36]}`}> </div>
          <div className={`blackKey key Fsharp ${pressedKeys[42-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key G ${pressedKeys[43-36]}`}> </div>
          <div className={`blackKey key Gsharp ${pressedKeys[44-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key A ${pressedKeys[45-36]}`}> </div>
          <div className={`blackKey key Asharp ${pressedKeys[46-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key B ${pressedKeys[47-36]}`}> </div>
        </div>

        <div className='keyWrapper'>
          <div className={`writeKey key C ${pressedKeys[48-36]}`}> </div>
          <div className={`blackKey key Csharp ${pressedKeys[49-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key D ${pressedKeys[50-36]}`}> </div>
          <div className={`blackKey key Dsharp ${pressedKeys[51-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key E ${pressedKeys[52-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key F ${pressedKeys[53-36]}`}> </div>
          <div className={`blackKey key Fsharp ${pressedKeys[54-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key G ${pressedKeys[55-36]}`}> </div>
          <div className={`blackKey key Gsharp ${pressedKeys[56-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key A ${pressedKeys[57-36]}`}> </div>
          <div className={`blackKey key Asharp ${pressedKeys[58-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key B ${pressedKeys[59-36]}`}> </div>
        </div>

        <div className='keyWrapper'>
          <div className={`writeKey key C ${pressedKeys[60-36]}`}></div>
          <div className={`blackKey key Csharp ${pressedKeys[61-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key D ${pressedKeys[62-36]}`}> </div>
          <div className={`blackKey key Dsharp ${pressedKeys[63-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key E ${pressedKeys[64-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key F ${pressedKeys[65-36]}`}> </div>
          <div className={`blackKey key Fsharp ${pressedKeys[66-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key G ${pressedKeys[67-36]}`}> </div>
          <div className={`blackKey key Gsharp ${pressedKeys[68-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key A ${pressedKeys[69-36]}`}> </div>
          <div className={`blackKey key Asharp ${pressedKeys[70-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key B ${pressedKeys[71-36]}`}> </div>
        </div>

        <div className='keyWrapper'>
          <div className={`writeKey key C ${pressedKeys[72-36]}`}> </div>
          <div className={`blackKey key Csharp ${pressedKeys[73-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key D ${pressedKeys[74-36]}`}> </div>
          <div className={`blackKey key Dsharp ${pressedKeys[75-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key E ${pressedKeys[76-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key F ${pressedKeys[77-36]}`}> </div>
          <div className={`blackKey key Fsharp ${pressedKeys[78-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key G ${pressedKeys[79-36]}`}> </div>
          <div className={`blackKey key Gsharp ${pressedKeys[80-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key A ${pressedKeys[81-36]}`}> </div>
          <div className={`blackKey key Asharp ${pressedKeys[82-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key B ${pressedKeys[83-36]}`}> </div>
        </div>

        <div className='keyWrapper'>
          <div className={`writeKey key C ${pressedKeys[84-36]}`}> </div>
          <div className={`blackKey key Csharp ${pressedKeys[85-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key D ${pressedKeys[86-36]}`}> </div>
          <div className={`blackKey key Dsharp ${pressedKeys[87-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key E ${pressedKeys[88-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key F ${pressedKeys[89-36]}`}> </div>
          <div className={`blackKey key Fsharp ${pressedKeys[90-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key G ${pressedKeys[91-36]}`}> </div>
          <div className={`blackKey key Gsharp ${pressedKeys[92-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key A ${pressedKeys[93-36]}`}> </div>
          <div className={`blackKey key Asharp ${pressedKeys[94-36]}`}> </div>
        </div>
        <div className='keyWrapper'>
          <div className={`writeKey key B ${pressedKeys[95-36]}`}> </div>
        </div>

        <div className='keyWrapper'>
          <div className={`writeKey key C ${pressedKeys[96-36]}`}> </div>
        </div>
      </div>
    )
  }
}