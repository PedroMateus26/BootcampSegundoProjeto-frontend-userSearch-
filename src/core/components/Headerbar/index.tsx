import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const Headerbar=()=>(
    <div className="header-container">
        <Link to="/home">
        <h1 className="header-title">Bootcamp DevSuperior</h1>
        </Link>
    </div>
)

export default Headerbar;