import React from "react";
import "./ForecastCard.scss";

const ForecastCard = ({ result, label, icon }) => {
  label = label.toUpperCase();
  return (
    <div className="forecastCard">
      <h3 className="forecastCard__header">{label}</h3>
      <img className="forecastCard__icon" src={icon} alt={icon} />
      <h3 className="forecastCard__text">{result}</h3>
    </div>
  );
};

export default ForecastCard;
