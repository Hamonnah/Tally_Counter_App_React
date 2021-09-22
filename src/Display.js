import React from 'react';
import './Display.css';

function Display(props) {

    return(
        <div className="Display">
            <span className="Number"> {props.displayNumber}
            </span>
            <span className="Experience">
                <h1>Experience Level {(props.displayLevel)}</h1> 
            </span>
        </div>     
    );
}

export default Display;