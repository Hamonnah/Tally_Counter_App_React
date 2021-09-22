import React from 'react';
import './Button.css'

function Button(props) {

    return (
        <div className="Button">
            <button className="InButton" onClick={props.incrementMethod}>+</button>
            <button className="DoubleInButton" onClick={props.autoClickMethod}>auto-clicker</button>
        </div>
    )
}

export default Button;