import React, { Component } from 'react';
import './style.css';
import Row from './Row';
import { emptyRow } from '../../config';
import { observer } from 'mobx-react';

@observer
export default class Strap extends Component {
    render() {
        const store = this.props.store;
        const notes2D = this.props.store.notes2D;

        const rowArr = notes2D.map((notes, i, notes2D) => {
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
            const currentPosition = document.querySelector('.rowWrapper').scrollTop;
            // FIXME: 20 is the height of cell defined both here and in css; need to find a better way to find the currentRow
            const currentRow = Math.floor(currentPosition / 20);
            store.currentRow = currentRow;
        }
        return (
            <div className="rowWrapper" 
                onScroll={() => handleScroll()} 

            >
                {rowArr}
            </div>
        )
    }
}