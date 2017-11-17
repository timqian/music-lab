import React, { Component } from 'react';
import './style.css';
import Row from './Row';
import { observer } from 'mobx-react';
import { KEY_NUM } from '../../config';

@observer
export default class Strap extends Component {
    render() {
        const store = this.props.store;
        const notes2D = this.props.store.notes2D;

        const rowArr = notes2D.map((notes, i, notes2D) => {
            const emptyRow = [];
            for (let i = 0; i < KEY_NUM; i++) {
                emptyRow.push(0);
            }
            const lastRow = notes2D[i - 1] ? notes2D[i - 1] : emptyRow;

            // TODO: add add button
            return (
                <Row
                    notes={notes}
                    lastRow={lastRow}
                    rowNum={i}
                    key={i}
                    isMouseDown={store.isMouseDown}
                />

            );
        });

        function handleScroll() {
            const currentPosition = document.querySelector('.strap').scrollTop;
            // FIXME: 20 is the height of cell defined both here and in css; need to find a better way to find the currentRow
            const currentRow = Math.floor((currentPosition - 1) / 20);
            store.currentRow = currentRow;
        }
        return (
            <div className="strap"
                onScroll={() => handleScroll()}
            >
            {/** whiteSpace is used to control the position of rowArr*/}
            {store.isKeyboardUp ? (<div className="whiteSpace"></div>) : (<div></div>)}
                {rowArr}
                <br/> <br/>
                <button className="bttn-minimal bttn-md bttn-no-outline" onClick={() => {
                    const notes2Add = [];
                    for (let j = 0; j < 50; j++) {
                        notes2Add[j] = [];
                        for (let i = 0; i < KEY_NUM; i++) {
                            notes2Add[j].push(0);
                        }
                    }
                    // console.log(notes2Add.length, 'notes to add length');
                    store.notes2D.push(...notes2Add);
                }}> Add more rows  </button>
                {!store.isKeyboardUp ? <div className="whiteSpace"></div> : (<div></div>)}
            </div>
        )
    }
}