import './index.css'
import React from 'react'

import Card from './components/layout/Card'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'

export default () =>
    <div>
        <h1>Fundamentos react</h1>

        <Card titulo="#4 Desafio Aleatório">
            <Aleatorio max={10} min={2} decimalNums={2}/>
        </Card>

        <Card titulo="#2 Com parametro">
            <ComParametro
                titulo="Segundo componente"
                aluno="Pedro"
                nota={9.3} />
        </Card>

        <Card titulo="#1 Primeiro">
            <Primeiro></Primeiro>
        </Card>

    </div>
