import './Card.css'
import React from 'react';

export default props => {
    const color = props.color || '#F00'
    const cardStyle = {
        backgroundColor: color,
        borderColor: color
    }

    return (
        <div className="card" style={cardStyle}>
            <div className="title">{props.titulo}</div>
            <div className="content">
                { props.children }
            </div>
        </div>
    );
}