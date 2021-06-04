import React from 'react'

import produtos from '../../data/produtos'

const TabelaProdutos = props => {
    const prodRows = produtos.map(prod => (
        <tr key={prod.id}>
            <td>{prod.nome}</td>
            <td>R$ {prod.preco.toLocaleString()}</td>
        </tr>
    ));

    return (
        <div className="tabela-produtos">
            <h2>Tabela de produtos</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {prodRows}
                </tbody>
            </table>
        </div>
    );
}

export default TabelaProdutos;