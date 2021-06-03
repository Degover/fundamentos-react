import React from 'react'

import alunos from '../../data/alunos'

export default props => {
    const elements = alunos.map((aluno) => (
        <li key={aluno.id}>
            {aluno.id}. {aluno.nome} - {aluno.nota}
        </li>
    ));

    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {elements}
            </ul>
        </div>
    );
}