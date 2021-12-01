//vendor
import React from "react";

export const NavBar = ({ history }) => {
  return (
    <div className="navbar">
      <button
        onClick={() => history.history.push('/login')}
        className="btn"> Login
      </button>
      <button
        onClick={() => history.history.push('/createuser')}
        className="btn">
        Register
      </button>
    </div>
  );
};
