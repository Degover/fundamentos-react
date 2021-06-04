import React from 'react'

import If, { Else } from './If'

const UsuarioInfo = props => {
    const usuario = props.usuario || {};
    const hasUser = usuario && usuario.nome;
    return (
        <div>
            <If test={hasUser}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
                <Else>
                    Seja bem vindo <strong>Amigão</strong>!
                </Else>
            </If>
        </div>
    );
};

export default UsuarioInfo;