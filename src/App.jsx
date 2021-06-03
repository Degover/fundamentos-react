import './index.css'
import './App.css'
import React from 'react'

import Card from './components/layout/Card'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'

import ListaAlunos from './components/repeticao/ListaAlunos'

export default () =>
    <div className="app">
        <h1>Fundamentos react</h1>

        <div className="cards-container">
            <Card titulo="#6 Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#5 Componente com filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro"></FamiliaMembro>
                    <FamiliaMembro nome="Ana"></FamiliaMembro>
                    <FamiliaMembro nome="Gustavo"></FamiliaMembro>
                </Familia>
            </Card>

            <Card titulo="#4 Desafio Aleatório" color="#FA6900">
                <Aleatorio max={10} min={2} decimalNums={2} />
            </Card>

            <Card titulo="#2 Com parametro" color="#E94C6F">
                <ComParametro
                    titulo="Segundo componente"
                    aluno="Pedro"
                    nota={9.3} />
            </Card>

            <Card titulo="#1 Primeiro componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
