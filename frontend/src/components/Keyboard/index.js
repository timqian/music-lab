// keyboard with keys to be pressed down

import React, { Component } from 'react';
import './style.css';
import { attack, release } from '../../utils/notePlayer.js';
import { observer } from 'mobx-react';

@observer
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
        const pressedKeys = pressedArr ? pressedArr.map(isPress => isPress ? 'onPress' : '') : [];
        const isMouseDown = this.props.isMouseDown;

        function handleMouseOver(i) {
            if (isMouseDown) {
                attack(i);
            }
        }

        return (
            <div className={`Keyboard `} >
                <div className='keyWrapper'>
                    <div className={`writeKey key C ${pressedKeys[0]}`} onMouseOver={() => handleMouseOver(0)}> </div>
                    <div className={`blackKey key Csharp ${pressedKeys[1]}`} onMouseOver={() => handleMouseOver(1)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key D ${pressedKeys[2]}`} onMouseOver={() => handleMouseOver(2)}> </div>
                    <div className={`blackKey key Dsharp ${pressedKeys[3]}`} onMouseOver={() => handleMouseOver(3)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key E ${pressedKeys[4]}`} onMouseOver={() => handleMouseOver(4)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key F ${pressedKeys[5]}`} onMouseOver={() => handleMouseOver(5)}> </div>
                    <div className={`blackKey key Fsharp ${pressedKeys[6]}`} onMouseOver={() => handleMouseOver(6)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key G ${pressedKeys[7]}`} onMouseOver={() => handleMouseOver(7)}> </div>
                    <div className={`blackKey key Gsharp ${pressedKeys[8]}`} onMouseOver={() => handleMouseOver(8)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key A ${pressedKeys[9]}`} onMouseOver={() => handleMouseOver(9)}> </div>
                    <div className={`blackKey key Asharp ${pressedKeys[10]}`} onMouseOver={() => handleMouseOver(10)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key B ${pressedKeys[11]}`} onMouseOver={() => handleMouseOver(11)}> </div>
                </div>

                <div className='keyWrapper'>
                    <div className={`writeKey key C ${pressedKeys[12]}`} onMouseOver={() => handleMouseOver(12)}> </div>
                    <div className={`blackKey key Csharp ${pressedKeys[13]}`} onMouseOver={() => handleMouseOver(13)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key D ${pressedKeys[14]}`} onMouseOver={() => handleMouseOver(14)}> </div>
                    <div className={`blackKey key Dsharp ${pressedKeys[15]}`} onMouseOver={() => handleMouseOver(15)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key E ${pressedKeys[16]}`} onMouseOver={() => handleMouseOver(16)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key F ${pressedKeys[17]}`} onMouseOver={() => handleMouseOver(17)}> </div>
                    <div className={`blackKey key Fsharp ${pressedKeys[18]}`} onMouseOver={() => handleMouseOver(18)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key G ${pressedKeys[19]}`} onMouseOver={() => handleMouseOver(19)}> </div>
                    <div className={`blackKey key Gsharp ${pressedKeys[20]}`} onMouseOver={() => handleMouseOver(20)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key A ${pressedKeys[21]}`} onMouseOver={() => handleMouseOver(21)}> </div>
                    <div className={`blackKey key Asharp ${pressedKeys[22]}`} onMouseOver={() => handleMouseOver(22)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key B ${pressedKeys[23]}`} onMouseOver={() => handleMouseOver(23)}> </div>
                </div>

                <div className='keyWrapper'>
                    <div className={`writeKey key C ${pressedKeys[24]}`} onMouseOver={() => handleMouseOver(24)}></div>
                    <div className={`blackKey key Csharp ${pressedKeys[25]}`} onMouseOver={() => handleMouseOver(25)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key D ${pressedKeys[26]}`} onMouseOver={() => handleMouseOver(26)}> </div>
                    <div className={`blackKey key Dsharp ${pressedKeys[27]}`} onMouseOver={() => handleMouseOver(27)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key E ${pressedKeys[28]}`} onMouseOver={() => handleMouseOver(28)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key F ${pressedKeys[29]}`} onMouseOver={() => handleMouseOver(29)}> </div>
                    <div className={`blackKey key Fsharp ${pressedKeys[30]}`} onMouseOver={() => handleMouseOver(30)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key G ${pressedKeys[31]}`} onMouseOver={() => handleMouseOver(31)}> </div>
                    <div className={`blackKey key Gsharp ${pressedKeys[32]}`} onMouseOver={() => handleMouseOver(32)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key A ${pressedKeys[33]}`} onMouseOver={() => handleMouseOver(33)}> </div>
                    <div className={`blackKey key Asharp ${pressedKeys[34]}`} onMouseOver={() => handleMouseOver(34)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key B ${pressedKeys[35]}`} onMouseOver={() => handleMouseOver(35)}> </div>
                </div>

                <div className='keyWrapper'>
                    <div className={`writeKey key C ${pressedKeys[36]}`} onMouseOver={() => handleMouseOver(36)}> </div>
                    <div className={`blackKey key Csharp ${pressedKeys[37]}`} onMouseOver={() => handleMouseOver(37)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key D ${pressedKeys[38]}`} onMouseOver={() => handleMouseOver(38)}> </div>
                    <div className={`blackKey key Dsharp ${pressedKeys[39]}`} onMouseOver={() => handleMouseOver(39)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key E ${pressedKeys[40]}`} onMouseOver={() => handleMouseOver(40)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key F ${pressedKeys[41]}`} onMouseOver={() => handleMouseOver(41)}> </div>
                    <div className={`blackKey key Fsharp ${pressedKeys[42]}`} onMouseOver={() => handleMouseOver(42)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key G ${pressedKeys[43]}`} onMouseOver={() => handleMouseOver(43)}> </div>
                    <div className={`blackKey key Gsharp ${pressedKeys[44]}`} onMouseOver={() => handleMouseOver(44)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key A ${pressedKeys[45]}`} onMouseOver={() => handleMouseOver(45)}> </div>
                    <div className={`blackKey key Asharp ${pressedKeys[46]}`} onMouseOver={() => handleMouseOver(46)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key B ${pressedKeys[47]}`} onMouseOver={() => handleMouseOver(47)}> </div>
                </div>

                <div className='keyWrapper'>
                    <div className={`writeKey key C ${pressedKeys[48]}`} onMouseOver={() => handleMouseOver(48)}> </div>
                    <div className={`blackKey key Csharp ${pressedKeys[49]}`} onMouseOver={() => handleMouseOver(49)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key D ${pressedKeys[50]}`} onMouseOver={() => handleMouseOver(50)}> </div>
                    <div className={`blackKey key Dsharp ${pressedKeys[51]}`} onMouseOver={() => handleMouseOver(51)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key E ${pressedKeys[52]}`} onMouseOver={() => handleMouseOver(52)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key F ${pressedKeys[53]}`} onMouseOver={() => handleMouseOver(53)}> </div>
                    <div className={`blackKey key Fsharp ${pressedKeys[54]}`} onMouseOver={() => handleMouseOver(54)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key G ${pressedKeys[55]}`} onMouseOver={() => handleMouseOver(55)}> </div>
                    <div className={`blackKey key Gsharp ${pressedKeys[56]}`} onMouseOver={() => handleMouseOver(56)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key A ${pressedKeys[57]}`} onMouseOver={() => handleMouseOver(57)}> </div>
                    <div className={`blackKey key Asharp ${pressedKeys[58]}`} onMouseOver={() => handleMouseOver(58)}> </div>
                </div>
                <div className='keyWrapper'>
                    <div className={`writeKey key B ${pressedKeys[59]}`} onMouseOver={() => handleMouseOver(59)}> </div>
                </div>

                <div className='keyWrapper' >
                    <div className={`writeKey key C ${pressedKeys[60]}`} onMouseOver={() => handleMouseOver(60)} > </div>
                </div>
            </div>
        );
    }
}