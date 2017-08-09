import React, { Component } from 'react';
import './style.css';
import Row from './Row';

export default class Strap extends Component {
    render() {
        const notes2D = this.props.notes2D;
        
        const unnamed = notes2D.map((notes,i) => {
            return (<Row notes={notes} rowNum = {i} key={i}/>)
        });
        return (
            <div className="rowWrapper">
                {unnamed}
            </div> 
        )
    }
}