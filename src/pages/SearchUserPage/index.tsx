import React, { useEffect, useRef, useState } from "react";
import ActionButton from "../../core/components/ActionButton";
import { UserData } from "../../core/types/UserData";
import { makeRequest } from "../../core/utils/request";
import "./styles.css";

const SearchUserPage = () => {
  const [name, setName] = useState("");
  const [userData, setUserData] = useState<UserData>();
  const [status,setStatus]=useState<number>();
  const idElement = document.getElementById("show-hidden");
  const idElementError = document.getElementById("error");
  

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleOnClick = () => {
    makeRequest({ url: `${name}` }).then(response=>[setUserData(response.data),setStatus(response.status)]).catch(()=>setStatus(404))
    //.then(response=>[setUserData(response.data),setStatus(response.status)]).catch(response=>console.log(response));
    //.then(response=>setUserData(response.data))
    //.then(response=>console.log(response.status))
    
  };

  useEffect(() => {
    if(idElement&&idElementError){
       if(status===200){
         idElementError.style.display='none';
         idElement.style.display='flex';
       }if(status===404){
         idElement.style.display='none';
         idElementError.style.display='flex';
       };
    };
    
  });

  return (
    <>
      <div className="search-container">
        <h1 className="search-title">Encontre um perfil Github</h1>
        <input
          placeholder="Nome do Usuário"
          type="text"
          value={name}
          className="search-input-text"
          onChange={handleOnChange}
        />

        <ActionButton title="Encontrar" onClick={handleOnClick} />
      </div>

      <div className="loader-container">
        <div className="img-loader"></div>
        <div className="user-info-loader"></div>
        <div className="btn-loader"></div>
      </div>

      <div className="user-container" id="show-hidden">
        <div></div>
        <div>
          <img src={userData?.avatar_url} className="user-img" />
          <a href={userData?.html_url}>
            <ActionButton title="Ver Perfil" />
          </a>
        </div>
        <div className="user-folows-info">
          <div className="user-follows-fields">
            <h2 className="user-follows-text">{`Repositórios públicos: ${userData?.public_repos}`}</h2>
          </div>
          <div className="user-follows-fields">
            <h2 className="user-follows-text">{`Seguidores: ${userData?.followers}`}</h2>
          </div>
          <div className="user-follows-fields">
            <h2 className="user-follows-text">{`Seguindo: ${userData?.following}`}</h2>
          </div>
          <div className="user-info">
            <h1 className="user-info-title">Informações</h1>
            <div className="user-info-filds">
              <h2 className="user-info-fields-text">{`Empresa: ${userData?.company}`}</h2>
            </div>
            <div className="user-info-filds">
              <h2 className="user-info-fields-text">
                {" "}
                {`Website/Blog: ${userData?.blog}`}
              </h2>
            </div>
            <div className="user-info-filds">
              <h2 className="user-info-fields-text">{`Localidade: ${userData?.location}`}</h2>
            </div>
            <div className="user-info-filds">
              <h2 className="user-info-fields-text">{`Membro desde: ${userData?.created_at}`}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="user-container" id="error"><h1>Não há usuário com esse nome</h1></div>
    </>
  );
};

export default SearchUserPage;
