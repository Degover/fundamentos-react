import React from 'react'
import DiretaFilho from './DiretaFilho'

const DiretaPai = props => {
    return (
        <div>
            <DiretaFilho nome="Filho 01" idade={10} isNerd={false} />
            <DiretaFilho nome="Filho 02" idade={12.5} isNerd={true} />
        </div>
    );
};

export default DiretaPai;