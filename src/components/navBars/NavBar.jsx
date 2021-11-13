//vendor
import React from "react";

export const NavBar = ({history}) => {
  return (
    <div className="navbar">
      <button 
      className="btn"
      onClick={()=> history.history.push('/searchy')}
      >Ir a buscador De empresas</button>

    </div>
  );
};
