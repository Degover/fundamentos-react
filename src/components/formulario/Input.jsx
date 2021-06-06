import './Input.css'
import React, { useState } from 'react';

const Input = props => {
    const [valor, setValor] = useState('Inicial');

    function onChange_input(e) {
        setValor(e.target.value);
    }

    return (
        <div className="input">
            <h2>{valor}</h2>
            <div>
                <input value={valor} onChange={onChange_input}/>
                <input value={valor} readOnly />
                <input value={undefined} />
            </div>
        </div>
    );
}

export default Input;