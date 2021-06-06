import React from 'react'

var PassoForm = props => {
    return (
        <div>
            <label htmlFor="passoInput">Passo:</label>
            <input name="passoInput" type="number"
                value={props.passo} onChange={e => props.setPasso(parseInt(e.target.value))}></input>
        </div>
    );
}

export default PassoForm;