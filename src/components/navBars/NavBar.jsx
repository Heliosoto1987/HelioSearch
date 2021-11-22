//vendor
import React from "react";

export const NavBar = ({history}) => {
  return (
    <div className="navbar">
       <button 
            onClick={()=> history.history.push('/login')}
            className="btn"> Login
            </button>
            <button 
            onClick={()=> history.history.push('/createuser')}
            className="btn"> Create Usuario 
            </button>
      <h3 
      className=""
      onClick={()=> history.history.push('/searchy')}
      >Business search engine</h3>
    </div>
  );
};
