import React from 'react'

var Display = props => {
    const pad = num => ('0' + num).substr(-2);

    return (
        <div className="display">
            {props.numeros.map((numero, index) => <div key={index}>[{pad(numero)}]</div>)}
        </div>
    )
}

export default Display;