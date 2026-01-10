import React from 'react';

const InfoBox = ({ title, value, icon, variant }) => {
  // variant può essere: primary (blu), success (verde), warning (giallo), danger (rosso)
  return (
    <div className={`small-box text-bg-${variant}`}>
      <div className="inner">
        <h3>{value}</h3>
        <p>{title}</p>
      </div>
      <div className="small-box-icon">
        <i className={`bi ${icon}`}></i>
      </div>
      <a href="#" className="small-box-footer link-light link-underline-opacity-0 link-underline-opacity-50-hover">
        Dettagli <i className="bi bi-arrow-right-short"></i>
      </a>
    </div>
  );
};

export default InfoBox;