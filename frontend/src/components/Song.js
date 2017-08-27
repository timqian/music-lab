import React, { Component } from 'react';

import Keyboard from './Keyboard';
import Strap from './Strap';
import { observer } from 'mobx-react';

@observer
class Song extends Component {

    render() {
        const store = this.props.store;

        let pressedArr;
        if( store.currentRow === -1) {
            pressedArr = store.pressedNotes;
        } else {
            pressedArr = store.notes2D[store.currentRow]
        }
        return (
            <div onMouseDown={() => store.isMouseDown = true}
                onMouseUp={() => store.isMouseDown = false}
                className="Song"
            >
                {!store.keyboardRecordMode ? <Keyboard pressedArr={pressedArr} isMouseDown={store.isMouseDown} /> : <div></div>}
                <Strap store={store} />
                {store.keyboardRecordMode ? <Keyboard pressedArr={pressedArr} isMouseDown={store.isMouseDown} /> : <div></div>}
            </div>
        )
    }
}

export default Song;