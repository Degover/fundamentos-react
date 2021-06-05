import React from 'react'

const IndiretaFilho = props => {
    const IDADE_MAX = 70;
    const IDADE_MIN = 50;
    const gerarIdade = () => parseInt(Math.random() * (IDADE_MAX - IDADE_MIN) + IDADE_MIN);
    const gerarIsNerd = () => Math.random() > 0.5;

    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={() => props.onClick('João', gerarIdade(), gerarIsNerd())}>
                Fornecer informações
            </button>
        </div>
    );
};

export default IndiretaFilho;