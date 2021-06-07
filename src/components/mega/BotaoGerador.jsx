import React from 'react'

var BotaoGerador = props => {
    function gerarNumeros(qtNumeros) {
        let minNumber = 1;
        let maxNumber = 60;

        let finalArray = [];
        for(let i = 0; i < qtNumeros; i++) {
            let randomNum = Math.ceil(Math.random() * (maxNumber - minNumber) + minNumber);

            while(finalArray.indexOf(randomNum) >= 0) {
                randomNum++;
                if(randomNum > maxNumber)
                    randomNum -= maxNumber;
            }

            finalArray.push(randomNum);
            maxNumber--;
        }

        return finalArray;
    }

    const onClick = () => {
        const numberArray = gerarNumeros(props.quantidade);
        props.setSorteados(numberArray);
    }

    return (
        <div className="botao-gerador">
            <button onClick={onClick}>Gerar</button>
        </div>
    )
}

export default BotaoGerador;