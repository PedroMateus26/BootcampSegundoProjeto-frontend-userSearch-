import React from 'react';
import './styles.css';

type Props={
    title:string;
}

const ActionButton=({title}:Props)=>(
    <button className="act-btn-container">
        <h1 className="act-btn-text">{title}</h1>
    </button>
)

export default ActionButton;
