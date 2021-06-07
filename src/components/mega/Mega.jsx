import React, { useState } from 'react'

import './Mega.css'

import Display from './Display'
import BotaoGerador from './BotaoGerador'
import InputQuantidade from './InputQuantidade'

var Mega = props => {
    const [quantidade, setQuantidade] = useState(6);
    const [sorteados, setSorteados] = useState([0,0,0,0,0,0]);

    return (
        <div className="mega">
            <h2>Mega</h2>
            <div>
                <Display numeros={sorteados} />
                <BotaoGerador setSorteados={setSorteados} quantidade={quantidade} />
                <InputQuantidade quantidade={quantidade} setQuantidade={setQuantidade} />
            </div>
        </div>
    )
}

export default Mega;

/*
    function gerarNumeros(qtNumeros)

    retornar array com numeros aleatorios
        qt de elementos = qtNumeros
        numeros de 1 a 60
        não podem repetir

    botão para gerar os numeros
    display
    input para colocar quantidade
*/

