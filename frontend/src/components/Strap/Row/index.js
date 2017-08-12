import React, { Component } from 'react';
import './style.css';
import '../../Keyboard/style.css'; // TODO: borrow not hover and press effect, might be better solution
import {attack, release} from '../../../utils/notePlayer.js';

function handleMouseOver (isMouseDown, i) {
    if (isMouseDown) {
        attack(i);
    }
}

export default class Row extends Component {
    componentDidMount() {
        const rowNum = this.props.rowNum;
        const rowClassName = `Row-${rowNum}`;

        document.querySelectorAll(`.${rowClassName} .cell`)
            .forEach((cell, i) => {
                cell.addEventListener('mousedown', () => {
                    attack(i);
                });
                cell.addEventListener('mouseup', () => {
                    release(i);
                });

                cell.addEventListener('mouseleave', () => {
                    release(i);
                })
            })
    }

    render() {
        const notes = this.props.notes;
        const rowNum = this.props.rowNum;
        const rowClassName = `Row-${rowNum}`;
        const isMouseDown = this.props.isMouseDown;
        // console.log(isMouseDown, 'row');
        return (
            <div className={`Row ${rowClassName}`} >
                <div className='cellWrapper'>
                    <div className={`writeCell cell C ${notes[0]}`} onMouseOver={() => handleMouseOver(isMouseDown, 0)}> </div>
                    <div className={`blackCell cell Csharp ${notes[1]}`} onMouseOver={() => handleMouseOver(isMouseDown, 1)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell D ${notes[2]}`} onMouseOver={() => handleMouseOver(isMouseDown, 2)}> </div>
                    <div className={`blackCell cell Dsharp ${notes[3]}`} onMouseOver={() => handleMouseOver(isMouseDown, 3)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell E ${notes[4]}`} onMouseOver={() => handleMouseOver(isMouseDown, 4)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell F ${notes[5]}`} onMouseOver={() => handleMouseOver(isMouseDown, 5)}> </div>
                    <div className={`blackCell cell Fsharp ${notes[6]}`} onMouseOver={() => handleMouseOver(isMouseDown, 6)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell G ${notes[7]}`} onMouseOver={() => handleMouseOver(isMouseDown, 7)}> </div>
                    <div className={`blackCell cell Gsharp ${notes[8]}`} onMouseOver={() => handleMouseOver(isMouseDown, 8)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell A ${notes[9]}`} onMouseOver={() => handleMouseOver(isMouseDown, 9)}> </div>
                    <div className={`blackCell cell Asharp ${notes[10]}`} onMouseOver={() => handleMouseOver(isMouseDown, 10)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell B ${notes[11]}`} onMouseOver={() => handleMouseOver(isMouseDown, 11)}> </div>
                </div>

                <div className='cellWrapper'>
                    <div className={`writeCell cell C ${notes[12]}`} onMouseOver={() => handleMouseOver(isMouseDown, 12)}> </div>
                    <div className={`blackCell cell Csharp ${notes[13]}`} onMouseOver={() => handleMouseOver(isMouseDown, 13)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell D ${notes[14]}`} onMouseOver={() => handleMouseOver(isMouseDown, 14)}> </div>
                    <div className={`blackCell cell Dsharp ${notes[15]}`} onMouseOver={() => handleMouseOver(isMouseDown, 15)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell E ${notes[16]}`} onMouseOver={() => handleMouseOver(isMouseDown, 16)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell F ${notes[17]}`} onMouseOver={() => handleMouseOver(isMouseDown, 17)}> </div>
                    <div className={`blackCell cell Fsharp ${notes[18]}`} onMouseOver={() => handleMouseOver(isMouseDown, 18)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell G ${notes[19]}`} onMouseOver={() => handleMouseOver(isMouseDown, 19)}> </div>
                    <div className={`blackCell cell Gsharp ${notes[20]}`} onMouseOver={() => handleMouseOver(isMouseDown, 20)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell A ${notes[21]}`} onMouseOver={() => handleMouseOver(isMouseDown, 21)}> </div>
                    <div className={`blackCell cell Asharp ${notes[22]}`} onMouseOver={() => handleMouseOver(isMouseDown, 22)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell B ${notes[23]}`} onMouseOver={() => handleMouseOver(isMouseDown, 23)}> </div>
                </div>

                <div className='cellWrapper'>
                    <div className={`writeCell cell C ${notes[24]}`} onMouseOver={() => handleMouseOver(isMouseDown, 24)}></div>
                    <div className={`blackCell cell Csharp ${notes[25]}`} onMouseOver={() => handleMouseOver(isMouseDown, 25)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell D ${notes[26]}`} onMouseOver={() => handleMouseOver(isMouseDown, 26)}> </div>
                    <div className={`blackCell cell Dsharp ${notes[27]}`} onMouseOver={() => handleMouseOver(isMouseDown, 27)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell E ${notes[28]}`} onMouseOver={() => handleMouseOver(isMouseDown, 28)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell F ${notes[29]}`} onMouseOver={() => handleMouseOver(isMouseDown, 29)}> </div>
                    <div className={`blackCell cell Fsharp ${notes[30]}`} onMouseOver={() => handleMouseOver(isMouseDown, 30)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell G ${notes[31]}`} onMouseOver={() => handleMouseOver(isMouseDown, 31)}> </div>
                    <div className={`blackCell cell Gsharp ${notes[32]}`} onMouseOver={() => handleMouseOver(isMouseDown, 32)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell A ${notes[33]}`} onMouseOver={() => handleMouseOver(isMouseDown, 33)}> </div>
                    <div className={`blackCell cell Asharp ${notes[34]}`} onMouseOver={() => handleMouseOver(isMouseDown, 34)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell B ${notes[35]}`} onMouseOver={() => handleMouseOver(isMouseDown, 35)}> </div>
                </div>

                <div className='cellWrapper'>
                    <div className={`writeCell cell C ${notes[36]}`} onMouseOver={() => handleMouseOver(isMouseDown, 36)}> </div>
                    <div className={`blackCell cell Csharp ${notes[37]}`} onMouseOver={() => handleMouseOver(isMouseDown, 37)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell D ${notes[38]}`} onMouseOver={() => handleMouseOver(isMouseDown, 38)}> </div>
                    <div className={`blackCell cell Dsharp ${notes[39]}`} onMouseOver={() => handleMouseOver(isMouseDown, 39)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell E ${notes[40]}`} onMouseOver={() => handleMouseOver(isMouseDown, 40)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell F ${notes[41]}`} onMouseOver={() => handleMouseOver(isMouseDown, 41)}> </div>
                    <div className={`blackCell cell Fsharp ${notes[42]}`} onMouseOver={() => handleMouseOver(isMouseDown, 42)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell G ${notes[43]}`} onMouseOver={() => handleMouseOver(isMouseDown, 43)}> </div>
                    <div className={`blackCell cell Gsharp ${notes[44]}`} onMouseOver={() => handleMouseOver(isMouseDown, 44)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell A ${notes[45]}`} onMouseOver={() => handleMouseOver(isMouseDown, 45)}> </div>
                    <div className={`blackCell cell Asharp ${notes[46]}`} onMouseOver={() => handleMouseOver(isMouseDown, 46)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell B ${notes[47]}`} onMouseOver={() => handleMouseOver(isMouseDown, 47)}> </div>
                </div>

                <div className='cellWrapper'>
                    <div className={`writeCell cell C ${notes[48]}`} onMouseOver={() => handleMouseOver(isMouseDown, 48)}> </div>
                    <div className={`blackCell cell Csharp ${notes[49]}`} onMouseOver={() => handleMouseOver(isMouseDown, 49)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell D ${notes[50]}`} onMouseOver={() => handleMouseOver(isMouseDown, 50)}> </div>
                    <div className={`blackCell cell Dsharp ${notes[51]}`} onMouseOver={() => handleMouseOver(isMouseDown, 51)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell E ${notes[52]}`} onMouseOver={() => handleMouseOver(isMouseDown, 52)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell F ${notes[53]}`} onMouseOver={() => handleMouseOver(isMouseDown, 53)}> </div>
                    <div className={`blackCell cell Fsharp ${notes[54]}`} onMouseOver={() => handleMouseOver(isMouseDown, 54)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell G ${notes[55]}`} onMouseOver={() => handleMouseOver(isMouseDown, 55)}> </div>
                    <div className={`blackCell cell Gsharp ${notes[56]}`} onMouseOver={() => handleMouseOver(isMouseDown, 56)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell A ${notes[57]}`} onMouseOver={() => handleMouseOver(isMouseDown, 57)}> </div>
                    <div className={`blackCell cell Asharp ${notes[58]}`} onMouseOver={() => handleMouseOver(isMouseDown, 58)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell B ${notes[59]}`} onMouseOver={() => handleMouseOver(isMouseDown, 59)}> </div>
                </div>

                <div className='cellWrapper' >
                    <div className={`writeCell cell C ${notes[60]}`} onMouseOver={() => handleMouseOver(isMouseDown, 60)} > </div>
                </div>
            </div>
        );
    }
}