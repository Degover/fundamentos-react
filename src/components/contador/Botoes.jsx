import React from 'react'

var Botoes = props => {
    return (
        <div>
            <button onClick={props.incrementar}>+</button>
            <button onClick={props.decrementar}>-</button>
        </div>
    );
}

export default Botoes;