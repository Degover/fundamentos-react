import React from 'react';

export default props => {
    let randomNum = Math.random() * (props.max - props.min) + props.min;
    if (props.decimalNums && props.decimalNums > 0)
        randomNum = randomNum.toFixed(props.decimalNums);
    else
        randomNum = randomNum.toFixed(0);

    return (
        <div>
            <h2>Aleatório</h2>
            <p>
                O resultado foi <strong> {randomNum}.</strong>
            </p>
        </div>
    )
}