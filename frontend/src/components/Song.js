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
            // console.log(store.currentRow,'song');
            const currentNotes = store.notes2D[store.currentRow]
            pressedArr = currentNotes ? currentNotes.map((note, i) => note || store.pressedNotes[i]) : [];
        }
        return (
            <div onMouseDown={() => store.isMouseDown = true}
                onMouseUp={() => store.isMouseDown = false}
                className="Song"
            >
                {!store.isKeyboardUp ? <Keyboard pressedArr={pressedArr} isMouseDown={store.isMouseDown} /> : <div></div>}
                <Strap store={store} />
                {store.isKeyboardUp ? <Keyboard pressedArr={pressedArr} isMouseDown={store.isMouseDown} /> : <div></div>}
            </div>
        )
    }
}

export default Song;
