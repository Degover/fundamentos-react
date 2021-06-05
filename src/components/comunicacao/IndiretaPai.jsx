import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

const DiretaPai = props => {
    const [nome, setNome] = useState('?');
    const [idade, setIdade] = useState(0);
    const [isNerd, setIsNerd] = useState(false);

    function fornecerInformacoes(pNome, pIdade, pIsNerd) {
        setNome(pNome);
        setIdade(pIdade);
        setIsNerd(pIsNerd);
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade} </strong></span>
                <span>{isNerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho onClick={fornecerInformacoes}></IndiretaFilho>
        </div>
    );
};

export default DiretaPai;