import React, { Component } from 'react';
import './style.css';
import '../../Keyboard/style.css'; // TODO: borrow not hover and press effect, might be better solution
import {attack, release} from '../../../utils/notePlayer.js';

export default class Row extends Component {

    componentDidMount() {
        document.querySelectorAll('.cell').forEach((cell, i) => {
            cell.addEventListener('mousedown', () => {
                // TODO: add note to notes array if recording
                attack(i);
            });
            cell.addEventListener('mouseup', () => {
                release();
            });
            cell.addEventListener('mouseleave', () => {
                release();
            })
        })
    }

    render() {
        const notes = this.props.notes
        const rowNum = this.props.rowNum;
        // console.log(this.props.key);
        return (
            <div className='Row'>

                <div className='cellWrapper'>
                    <div className={`writeCell cell C ${notes[36 - 36]}`}> </div>
                    <div className={`blackCell cell Csharp ${notes[37 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell D ${notes[38 - 36]}`}> </div>
                    <div className={`blackCell cell Dsharp ${notes[39 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell E ${notes[40 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell F ${notes[41 - 36]}`}> </div>
                    <div className={`blackCell cell Fsharp ${notes[42 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell G ${notes[43 - 36]}`}> </div>
                    <div className={`blackCell cell Gsharp ${notes[44 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell A ${notes[45 - 36]}`}> </div>
                    <div className={`blackCell cell Asharp ${notes[46 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell B ${notes[47 - 36]}`}> </div>
                </div>

                <div className='cellWrapper'>
                    <div className={`writeCell cell C ${notes[48 - 36]}`}> </div>
                    <div className={`blackCell cell Csharp ${notes[49 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell D ${notes[50 - 36]}`}> </div>
                    <div className={`blackCell cell Dsharp ${notes[51 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell E ${notes[52 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell F ${notes[53 - 36]}`}> </div>
                    <div className={`blackCell cell Fsharp ${notes[54 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell G ${notes[55 - 36]}`}> </div>
                    <div className={`blackCell cell Gsharp ${notes[56 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell A ${notes[57 - 36]}`}> </div>
                    <div className={`blackCell cell Asharp ${notes[58 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell B ${notes[59 - 36]}`}> </div>
                </div>

                <div className='cellWrapper'>
                    <div className={`writeCell cell C ${notes[60 - 36]}`}></div>
                    <div className={`blackCell cell Csharp ${notes[61 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell D ${notes[62 - 36]}`}> </div>
                    <div className={`blackCell cell Dsharp ${notes[63 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell E ${notes[64 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell F ${notes[65 - 36]}`}> </div>
                    <div className={`blackCell cell Fsharp ${notes[66 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell G ${notes[67 - 36]}`}> </div>
                    <div className={`blackCell cell Gsharp ${notes[68 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell A ${notes[69 - 36]}`}> </div>
                    <div className={`blackCell cell Asharp ${notes[70 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell B ${notes[71 - 36]}`}> </div>
                </div>

                <div className='cellWrapper'>
                    <div className={`writeCell cell C ${notes[72 - 36]}`}> </div>
                    <div className={`blackCell cell Csharp ${notes[73 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell D ${notes[74 - 36]}`}> </div>
                    <div className={`blackCell cell Dsharp ${notes[75 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell E ${notes[76 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell F ${notes[77 - 36]}`}> </div>
                    <div className={`blackCell cell Fsharp ${notes[78 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell G ${notes[79 - 36]}`}> </div>
                    <div className={`blackCell cell Gsharp ${notes[80 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell A ${notes[81 - 36]}`}> </div>
                    <div className={`blackCell cell Asharp ${notes[82 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell B ${notes[83 - 36]}`}> </div>
                </div>

                <div className='cellWrapper'>
                    <div className={`writeCell cell C ${notes[84 - 36]}`}> </div>
                    <div className={`blackCell cell Csharp ${notes[85 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell D ${notes[86 - 36]}`}> </div>
                    <div className={`blackCell cell Dsharp ${notes[87 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell E ${notes[88 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell F ${notes[89 - 36]}`}> </div>
                    <div className={`blackCell cell Fsharp ${notes[90 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell G ${notes[91 - 36]}`}> </div>
                    <div className={`blackCell cell Gsharp ${notes[92 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell A ${notes[93 - 36]}`}> </div>
                    <div className={`blackCell cell Asharp ${notes[94 - 36]}`}> </div>
                </div>
                <div className='cellWrapper'>
                    <div className={`writeCell cell B ${notes[95 - 36]}`}> </div>
                </div>

                <div className='cellWrapper'>
                    <div className={`writeCell cell C ${notes[96 - 36]}`}> </div>
                </div>
            </div>
        );
    }
}