import React from 'react'

var InputQuantidade = props => {
    const onChange = e => {
        let inputedValue = parseInt(e.target.value) || 0;
        props.setQuantidade(inputedValue);
    }

    return (
        <div className="input">
            <input value={props.quantidade} onChange={onChange} type="number"/>
        </div>
    )
}

export default InputQuantidade;