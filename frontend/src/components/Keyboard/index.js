// keyboard with keys to be pressed down

import React, { Component } from 'react';
import './style.css';
import {attack, release} from '../../utils/notePlayer.js';

function handleMouseOver (isMouseDown, i) {
  if (isMouseDown) {
      attack(i);
  }
}

export default class Board extends Component {


componentDidMount() {
  document.querySelectorAll(`.key`)
      .forEach((key, i) => {
          key.addEventListener('mousedown', () => {
              attack(i);
          });
          key.addEventListener('mouseup', () => {
              release(i);
          });

          key.addEventListener('mouseleave', () => {
              release(i);
          })
      })
}

render() {
  const pressedArr = this.props.pressedArr;
  const pressedKeys = pressedArr.map(isPress => isPress ? 'onPress' : '');
  const isMouseDown = this.props.isMouseDown;
  // console.log(isMouseDown, 'row');
  return (
      <div className={`Keyboard `} >
          <div className='keyWrapper'>
              <div className={`writeKey key C ${pressedKeys[0]}`} onMouseOver={() => handleMouseOver(isMouseDown, 0)}> </div>
              <div className={`blackKey key Csharp ${pressedKeys[1]}`} onMouseOver={() => handleMouseOver(isMouseDown, 1)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key D ${pressedKeys[2]}`} onMouseOver={() => handleMouseOver(isMouseDown, 2)}> </div>
              <div className={`blackKey key Dsharp ${pressedKeys[3]}`} onMouseOver={() => handleMouseOver(isMouseDown, 3)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key E ${pressedKeys[4]}`} onMouseOver={() => handleMouseOver(isMouseDown, 4)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key F ${pressedKeys[5]}`} onMouseOver={() => handleMouseOver(isMouseDown, 5)}> </div>
              <div className={`blackKey key Fsharp ${pressedKeys[6]}`} onMouseOver={() => handleMouseOver(isMouseDown, 6)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key G ${pressedKeys[7]}`} onMouseOver={() => handleMouseOver(isMouseDown, 7)}> </div>
              <div className={`blackKey key Gsharp ${pressedKeys[8]}`} onMouseOver={() => handleMouseOver(isMouseDown, 8)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key A ${pressedKeys[9]}`} onMouseOver={() => handleMouseOver(isMouseDown, 9)}> </div>
              <div className={`blackKey key Asharp ${pressedKeys[10]}`} onMouseOver={() => handleMouseOver(isMouseDown, 10)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key B ${pressedKeys[11]}`} onMouseOver={() => handleMouseOver(isMouseDown, 11)}> </div>
          </div>

          <div className='keyWrapper'>
              <div className={`writeKey key C ${pressedKeys[12]}`} onMouseOver={() => handleMouseOver(isMouseDown, 12)}> </div>
              <div className={`blackKey key Csharp ${pressedKeys[13]}`} onMouseOver={() => handleMouseOver(isMouseDown, 13)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key D ${pressedKeys[14]}`} onMouseOver={() => handleMouseOver(isMouseDown, 14)}> </div>
              <div className={`blackKey key Dsharp ${pressedKeys[15]}`} onMouseOver={() => handleMouseOver(isMouseDown, 15)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key E ${pressedKeys[16]}`} onMouseOver={() => handleMouseOver(isMouseDown, 16)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key F ${pressedKeys[17]}`} onMouseOver={() => handleMouseOver(isMouseDown, 17)}> </div>
              <div className={`blackKey key Fsharp ${pressedKeys[18]}`} onMouseOver={() => handleMouseOver(isMouseDown, 18)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key G ${pressedKeys[19]}`} onMouseOver={() => handleMouseOver(isMouseDown, 19)}> </div>
              <div className={`blackKey key Gsharp ${pressedKeys[20]}`} onMouseOver={() => handleMouseOver(isMouseDown, 20)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key A ${pressedKeys[21]}`} onMouseOver={() => handleMouseOver(isMouseDown, 21)}> </div>
              <div className={`blackKey key Asharp ${pressedKeys[22]}`} onMouseOver={() => handleMouseOver(isMouseDown, 22)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key B ${pressedKeys[23]}`} onMouseOver={() => handleMouseOver(isMouseDown, 23)}> </div>
          </div>

          <div className='keyWrapper'>
              <div className={`writeKey key C ${pressedKeys[24]}`} onMouseOver={() => handleMouseOver(isMouseDown, 24)}></div>
              <div className={`blackKey key Csharp ${pressedKeys[25]}`} onMouseOver={() => handleMouseOver(isMouseDown, 25)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key D ${pressedKeys[26]}`} onMouseOver={() => handleMouseOver(isMouseDown, 26)}> </div>
              <div className={`blackKey key Dsharp ${pressedKeys[27]}`} onMouseOver={() => handleMouseOver(isMouseDown, 27)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key E ${pressedKeys[28]}`} onMouseOver={() => handleMouseOver(isMouseDown, 28)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key F ${pressedKeys[29]}`} onMouseOver={() => handleMouseOver(isMouseDown, 29)}> </div>
              <div className={`blackKey key Fsharp ${pressedKeys[30]}`} onMouseOver={() => handleMouseOver(isMouseDown, 30)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key G ${pressedKeys[31]}`} onMouseOver={() => handleMouseOver(isMouseDown, 31)}> </div>
              <div className={`blackKey key Gsharp ${pressedKeys[32]}`} onMouseOver={() => handleMouseOver(isMouseDown, 32)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key A ${pressedKeys[33]}`} onMouseOver={() => handleMouseOver(isMouseDown, 33)}> </div>
              <div className={`blackKey key Asharp ${pressedKeys[34]}`} onMouseOver={() => handleMouseOver(isMouseDown, 34)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key B ${pressedKeys[35]}`} onMouseOver={() => handleMouseOver(isMouseDown, 35)}> </div>
          </div>

          <div className='keyWrapper'>
              <div className={`writeKey key C ${pressedKeys[36]}`} onMouseOver={() => handleMouseOver(isMouseDown, 36)}> </div>
              <div className={`blackKey key Csharp ${pressedKeys[37]}`} onMouseOver={() => handleMouseOver(isMouseDown, 37)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key D ${pressedKeys[38]}`} onMouseOver={() => handleMouseOver(isMouseDown, 38)}> </div>
              <div className={`blackKey key Dsharp ${pressedKeys[39]}`} onMouseOver={() => handleMouseOver(isMouseDown, 39)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key E ${pressedKeys[40]}`} onMouseOver={() => handleMouseOver(isMouseDown, 40)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key F ${pressedKeys[41]}`} onMouseOver={() => handleMouseOver(isMouseDown, 41)}> </div>
              <div className={`blackKey key Fsharp ${pressedKeys[42]}`} onMouseOver={() => handleMouseOver(isMouseDown, 42)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key G ${pressedKeys[43]}`} onMouseOver={() => handleMouseOver(isMouseDown, 43)}> </div>
              <div className={`blackKey key Gsharp ${pressedKeys[44]}`} onMouseOver={() => handleMouseOver(isMouseDown, 44)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key A ${pressedKeys[45]}`} onMouseOver={() => handleMouseOver(isMouseDown, 45)}> </div>
              <div className={`blackKey key Asharp ${pressedKeys[46]}`} onMouseOver={() => handleMouseOver(isMouseDown, 46)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key B ${pressedKeys[47]}`} onMouseOver={() => handleMouseOver(isMouseDown, 47)}> </div>
          </div>

          <div className='keyWrapper'>
              <div className={`writeKey key C ${pressedKeys[48]}`} onMouseOver={() => handleMouseOver(isMouseDown, 48)}> </div>
              <div className={`blackKey key Csharp ${pressedKeys[49]}`} onMouseOver={() => handleMouseOver(isMouseDown, 49)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key D ${pressedKeys[50]}`} onMouseOver={() => handleMouseOver(isMouseDown, 50)}> </div>
              <div className={`blackKey key Dsharp ${pressedKeys[51]}`} onMouseOver={() => handleMouseOver(isMouseDown, 51)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key E ${pressedKeys[52]}`} onMouseOver={() => handleMouseOver(isMouseDown, 52)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key F ${pressedKeys[53]}`} onMouseOver={() => handleMouseOver(isMouseDown, 53)}> </div>
              <div className={`blackKey key Fsharp ${pressedKeys[54]}`} onMouseOver={() => handleMouseOver(isMouseDown, 54)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key G ${pressedKeys[55]}`} onMouseOver={() => handleMouseOver(isMouseDown, 55)}> </div>
              <div className={`blackKey key Gsharp ${pressedKeys[56]}`} onMouseOver={() => handleMouseOver(isMouseDown, 56)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key A ${pressedKeys[57]}`} onMouseOver={() => handleMouseOver(isMouseDown, 57)}> </div>
              <div className={`blackKey key Asharp ${pressedKeys[58]}`} onMouseOver={() => handleMouseOver(isMouseDown, 58)}> </div>
          </div>
          <div className='keyWrapper'>
              <div className={`writeKey key B ${pressedKeys[59]}`} onMouseOver={() => handleMouseOver(isMouseDown, 59)}> </div>
          </div>

          <div className='keyWrapper' >
              <div className={`writeKey key C ${pressedKeys[60]}`} onMouseOver={() => handleMouseOver(isMouseDown, 60)} > </div>
          </div>
      </div>
  );
}
}