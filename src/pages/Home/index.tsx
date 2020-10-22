import React from "react";
import { Link } from "react-router-dom";
import ActionButton from "../../core/components/ActionButton";
import "./styles.css";

const Home = () => (
  <div className="home-container">
    <h1 className="home-title">Desafio do Capítulo 3, Bootcamp DevSuperior</h1>
    
    <p className="text-content-home">
        Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br/>
        Favor observar as instruções passadas no capítulo sobre a elaboração deste
        projeto. <br/>
        Este design foi adaptado a partir de Ant Design System for Figma,
        de Mateusz Wierzbicki: antforfigma@gmail.com
    </p>
    <Link to="/searchUser">
      <ActionButton title="Começar"/> 
    </Link>
    
  </div>
  
);

export default Home;
