import React, { Component } from 'react';
import './style.css';
import '../../Keyboard/style.css'; // TODO: borrow not hover and press effect, might be better solution
import {attack, release} from '../../../utils/notePlayer.js';
import { observer } from 'mobx-react';

let noteMark = 1; // the notes recored with mousedown and move have the same pressType;

@observer
export default class Row extends Component {
    componentDidMount() {
        const rowNum = this.props.rowNum;
        const rowClassName = `Row-${rowNum}`;
        const notes = this.props.notes;

        document.querySelectorAll(`.${rowClassName} .cell`)
            .forEach((cell, i) => {
                cell.addEventListener('mousedown', () => {
                    attack(i);
                    notes[i] = noteMark;
                });
                cell.addEventListener('mouseup', () => {
                    release(i);
                    noteMark++;
                });

                cell.addEventListener('mouseleave', () => {
                    release(i);
                })
            })
    }

    render() {
        const notes = this.props.notes; // FIXME: duplicated definitions
        const noteKeys = notes.map(isPress => isPress ? 'onPress' : '');
        const rowNum = this.props.rowNum;
        const rowClassName = `Row-${rowNum}`;
        const isMouseDown = this.props.isMouseDown;

        function handleMouseOver (i) {
            if (isMouseDown) {
                if (notes[i] !== 0) {
                    notes[i] = 0;
                } else {
                    attack(i);
                    notes[i] = noteMark; 
                }
            }
        }

        return (
            <div className={`Row ${rowClassName}`} >
                <div className='cellWrapper'>
                    <div className={`writeCell cell C ${noteKeys[0]}`} onMouseOver={() => handleMouseOver(0)}> </div>
                    <div className={`blackCell cell Csharp ${noteKeys[1]}`} onMouseOver={() => handleMouseOver(1)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell D ${noteKeys[2]}`} onMouseOver={() => handleMouseOver(2)}> </div>
                    <div className={`blackCell cell Dsharp ${noteKeys[3]}`} onMouseOver={() => handleMouseOver(3)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell E ${noteKeys[4]}`} onMouseOver={() => handleMouseOver(4)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell F ${noteKeys[5]}`} onMouseOver={() => handleMouseOver(5)}> </div>
                    <div className={`blackCell cell Fsharp ${noteKeys[6]}`} onMouseOver={() => handleMouseOver(6)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell G ${noteKeys[7]}`} onMouseOver={() => handleMouseOver(7)}> </div>
                    <div className={`blackCell cell Gsharp ${noteKeys[8]}`} onMouseOver={() => handleMouseOver(8)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell A ${noteKeys[9]}`} onMouseOver={() => handleMouseOver(9)}> </div>
                    <div className={`blackCell cell Asharp ${noteKeys[10]}`} onMouseOver={() => handleMouseOver(10)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell B ${noteKeys[11]}`} onMouseOver={() => handleMouseOver(11)}> </div>
                </div>

                <div className='cellWrapper'>
                    <div className={`writeCell cell C ${noteKeys[12]}`} onMouseOver={() => handleMouseOver(12)}> </div>
                    <div className={`blackCell cell Csharp ${noteKeys[13]}`} onMouseOver={() => handleMouseOver(13)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell D ${noteKeys[14]}`} onMouseOver={() => handleMouseOver(14)}> </div>
                    <div className={`blackCell cell Dsharp ${noteKeys[15]}`} onMouseOver={() => handleMouseOver(15)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell E ${noteKeys[16]}`} onMouseOver={() => handleMouseOver(16)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell F ${noteKeys[17]}`} onMouseOver={() => handleMouseOver(17)}> </div>
                    <div className={`blackCell cell Fsharp ${noteKeys[18]}`} onMouseOver={() => handleMouseOver(18)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell G ${noteKeys[19]}`} onMouseOver={() => handleMouseOver(19)}> </div>
                    <div className={`blackCell cell Gsharp ${noteKeys[20]}`} onMouseOver={() => handleMouseOver(20)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell A ${noteKeys[21]}`} onMouseOver={() => handleMouseOver(21)}> </div>
                    <div className={`blackCell cell Asharp ${noteKeys[22]}`} onMouseOver={() => handleMouseOver(22)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell B ${noteKeys[23]}`} onMouseOver={() => handleMouseOver(23)}> </div>
                </div>

                <div className='cellWrapper'>
                    <div className={`writeCell cell C ${noteKeys[24]}`} onMouseOver={() => handleMouseOver(24)}></div>
                    <div className={`blackCell cell Csharp ${noteKeys[25]}`} onMouseOver={() => handleMouseOver(25)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell D ${noteKeys[26]}`} onMouseOver={() => handleMouseOver(26)}> </div>
                    <div className={`blackCell cell Dsharp ${noteKeys[27]}`} onMouseOver={() => handleMouseOver(27)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell E ${noteKeys[28]}`} onMouseOver={() => handleMouseOver(28)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell F ${noteKeys[29]}`} onMouseOver={() => handleMouseOver(29)}> </div>
                    <div className={`blackCell cell Fsharp ${noteKeys[30]}`} onMouseOver={() => handleMouseOver(30)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell G ${noteKeys[31]}`} onMouseOver={() => handleMouseOver(31)}> </div>
                    <div className={`blackCell cell Gsharp ${noteKeys[32]}`} onMouseOver={() => handleMouseOver(32)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell A ${noteKeys[33]}`} onMouseOver={() => handleMouseOver(33)}> </div>
                    <div className={`blackCell cell Asharp ${noteKeys[34]}`} onMouseOver={() => handleMouseOver(34)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell B ${noteKeys[35]}`} onMouseOver={() => handleMouseOver(35)}> </div>
                </div>

                <div className='cellWrapper'>
                    <div className={`writeCell cell C ${noteKeys[36]}`} onMouseOver={() => handleMouseOver(36)}> </div>
                    <div className={`blackCell cell Csharp ${noteKeys[37]}`} onMouseOver={() => handleMouseOver(37)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell D ${noteKeys[38]}`} onMouseOver={() => handleMouseOver(38)}> </div>
                    <div className={`blackCell cell Dsharp ${noteKeys[39]}`} onMouseOver={() => handleMouseOver(39)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell E ${noteKeys[40]}`} onMouseOver={() => handleMouseOver(40)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell F ${noteKeys[41]}`} onMouseOver={() => handleMouseOver(41)}> </div>
                    <div className={`blackCell cell Fsharp ${noteKeys[42]}`} onMouseOver={() => handleMouseOver(42)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell G ${noteKeys[43]}`} onMouseOver={() => handleMouseOver(43)}> </div>
                    <div className={`blackCell cell Gsharp ${noteKeys[44]}`} onMouseOver={() => handleMouseOver(44)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell A ${noteKeys[45]}`} onMouseOver={() => handleMouseOver(45)}> </div>
                    <div className={`blackCell cell Asharp ${noteKeys[46]}`} onMouseOver={() => handleMouseOver(46)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell B ${noteKeys[47]}`} onMouseOver={() => handleMouseOver(47)}> </div>
                </div>

                <div className='cellWrapper'>
                    <div className={`writeCell cell C ${noteKeys[48]}`} onMouseOver={() => handleMouseOver(48)}> </div>
                    <div className={`blackCell cell Csharp ${noteKeys[49]}`} onMouseOver={() => handleMouseOver(49)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell D ${noteKeys[50]}`} onMouseOver={() => handleMouseOver(50)}> </div>
                    <div className={`blackCell cell Dsharp ${noteKeys[51]}`} onMouseOver={() => handleMouseOver(51)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell E ${noteKeys[52]}`} onMouseOver={() => handleMouseOver(52)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell F ${noteKeys[53]}`} onMouseOver={() => handleMouseOver(53)}> </div>
                    <div className={`blackCell cell Fsharp ${noteKeys[54]}`} onMouseOver={() => handleMouseOver(54)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell G ${noteKeys[55]}`} onMouseOver={() => handleMouseOver(55)}> </div>
                    <div className={`blackCell cell Gsharp ${noteKeys[56]}`} onMouseOver={() => handleMouseOver(56)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell A ${noteKeys[57]}`} onMouseOver={() => handleMouseOver(57)}> </div>
                    <div className={`blackCell cell Asharp ${noteKeys[58]}`} onMouseOver={() => handleMouseOver(58)}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell B ${noteKeys[59]}`} onMouseOver={() => handleMouseOver(59)}> </div>
                </div>

                <div className='cellWrapper' >
                    <div className={`writeCell cell C ${noteKeys[60]}`} onMouseOver={() => handleMouseOver(60)} > </div>
                </div>
            </div>
        );
    }
}