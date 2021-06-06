import './Contador.css'
import React from 'react'

import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

class Contador extends React.Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    incrementar = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }

    decrementar = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    setPasso = (novoPasso) => this.setState({ passo: novoPasso })

    render() {
        return (
            <div className="contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes incrementar={this.incrementar} decrementar={this.decrementar} />
            </div>
        )
    }
}
export default Contador;