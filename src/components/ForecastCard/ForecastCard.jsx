import React from "react";
import "./ForecastCard.scss";

const ForecastCard = ({ day }) => {
  const dayOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(day.date);

  return (
    <div className="forecastCard">
      <div className="forecastCard__wrap">
        <h3 className="forecastCard__header">{dayOfTheWeek[date.getDay()]}</h3>
        <div className="forecastCard__blog">
          <div className="forecastCard__blog--icon">
            <img src={day.day.condition.icon} alt="weather icon" />
          </div>
          <div className="forecastCard__blog--temp">
            <h3 className="forecastCard__blog--temp-text">
              {day.day.avgtemp_c} °C
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
