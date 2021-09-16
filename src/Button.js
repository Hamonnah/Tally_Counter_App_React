import React from 'react';
import './Button.css'

function Button(props) {

    return (
        <div className="Button">
            <button className="InButton" onClick={props.incrementMethod}>+</button>
        </div>
    )

}

export default Button;