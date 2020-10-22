import React from "react";
import ActionButton from "../../core/components/ActionButton";
import "./styles.css";

const SearchUserPage = () => (
  <>
  <div className="search-container">
    <h1 className="search-title">Encontre um perfil Github</h1>
    <input type="text" className="search-input-text" />
    <ActionButton title="Encontrar"/>
  </div>
  <div className="loader-container">
      <div className="img-loader">

      </div>
      <div className="user-info-loader">

      </div>
      <div className="btn-loader">
        
      </div>
  </div>
  </>
);

export default SearchUserPage;
