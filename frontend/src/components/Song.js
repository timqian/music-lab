import React, { Component } from 'react';

import Keyboard from './Keyboard';
import Strap from './Strap';
import { observer } from 'mobx-react';

@observer
class Song extends Component {

    render() {
        const store = this.props.store;

        return (
            <div onMouseDown={() => store.isMouseDown = true}
                onMouseUp={() => store.isMouseDown = false}
            >
                <Keyboard pressedArr={store.notes2D[store.currentRow]} isMouseDown={store.isMouseDown} />
                <Strap store={store} />
            </div>
        )
    }
}

export default Song;