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
import TabelaProdutos from './components/repeticao/TabelaProdutos'

import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'

import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'

import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'

import Mega from './components/mega/Mega'

export default () =>
    <div className="app">
        <h1>Fundamentos react</h1>

        <div className="cards-container">
            <Card titulo="#13 Desafio Megasena" color="#576aa8">
                <Mega/>
            </Card>

            <Card titulo="#12 Contador" color="#556">
                <Contador numeroInicial={10} ></Contador>
            </Card>

            <Card titulo="#11 Componente controlado(Input)" color="#8B1D39">
                <Input></Input>
            </Card>

            <Card titulo="#10 Comunicação direta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 Comunicação direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 Renderização condicional" color="#3A9AD9">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: "Fernando" }}></UsuarioInfo>
                <UsuarioInfo usuario={{ email: "Fernando" }}></UsuarioInfo>
            </Card>

            <Card titulo="#07 Tabela de produtos" color="#D8BFD8">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 Componente com filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro"></FamiliaMembro>
                    <FamiliaMembro nome="Ana"></FamiliaMembro>
                    <FamiliaMembro nome="Gustavo"></FamiliaMembro>
                </Familia>
            </Card>

            <Card titulo="#04 Desafio Aleatório" color="#FA6900">
                <Aleatorio max={10} min={2} decimalNums={2} />
            </Card>

            <Card titulo="#02 Com parametro" color="#E94C6F">
                <ComParametro
                    titulo="Segundo componente"
                    aluno="Pedro"
                    nota={9.3} />
            </Card>

            <Card titulo="#01 Primeiro componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
