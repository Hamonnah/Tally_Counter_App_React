import React from 'react';
import './ButtonsPanel.css'

function ButtonsPanel(props) {

    return (
        <div className="Button">
            <button className="InButton" onClick={props.incrementMethod}>+</button>
            <button className="AutoClick" disabled={props.disabledMethod} onClick={props.autoClickMethod}>Auto-Clicker</button> 
            <button className="StopAutoClick" onClick={props.stopAutoClickMethod}>Stop</button>
        </div>
    )
}

export default ButtonsPanel;