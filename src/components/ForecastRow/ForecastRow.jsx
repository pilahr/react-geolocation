import React from "react";
import "./ForecastRow.scss";


const ForecastRow = ({ day }) => {
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
    <div className="forecastRow">
      <h4 className="forecastRow__text">{dayOfTheWeek[date.getDay()]}</h4>
      <img
        className="forecastRow__icon"
        src={day.day.condition.icon}
        alt="weather icon"
      />
      <h4 className="forecastRow__text-temp">
        {day.day.mintemp_c}° /{day.day.maxtemp_c}°
      </h4>
    </div>
  );
};

export default ForecastRow;
