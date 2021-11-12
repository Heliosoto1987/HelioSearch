//vendor
import React from "react";

export const Cards = ({name, founded,
  industry,
  website,
  size}) => {
  return (
    <div className="card">
      <div className="card__name">{name}</div>
      <div className="card__founded">{founded}</div>
      <div className="card__main">
      <button className="card__main--industry">{industry} </button>
      <button className="card__main--size">{size}</button>
      </div>
      <div className="card__footer">
      <a className="card__footer--btn"
        
        href={`https://${website}`}
      >
        {website}
      </a>
        
        </div>
    </div>
  );
};
