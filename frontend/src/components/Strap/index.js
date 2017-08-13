import React, { Component } from 'react';
import './style.css';
import Row from './Row';

export default class Strap extends Component {
    render() {
        const notes2D = this.props.notes2D;
        const isMouseDown = this.props.isMouseDown;

        const rowArr = notes2D.map((notes, i) => {
            return (<Row notes={notes} rowNum={i} key={i} 
                isMouseDown={isMouseDown} />);
        });
        
        return (
            <div className="rowWrapper" >
                {rowArr}
            </div>
        )
    }
}