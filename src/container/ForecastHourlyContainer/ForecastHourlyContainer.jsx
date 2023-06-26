import React from "react";
import "./ForecastHourlyContainer.scss";
import ForecastHourly from "../../components/ForecastHourly/ForecastHourly";

const ForecastHourlyContainer = ({ weatherData }) => {
  const currentTime = weatherData.location.localtime.split(" ")[1];
  const currentHour = parseInt(currentTime.split(":")[0]);

  const forecast = weatherData.forecast.forecastday;
  const today = forecast[0];
  const tomorrow = forecast[1];

  const timeOfTheDay = today.hour;
  const tomorrowTime = tomorrow.hour;

  return (
    <div className="forecastHourlyContainer">
      <ForecastHourly hourlyData={timeOfTheDay} tomorrowTime={tomorrowTime} currentHour={currentHour} />
    </div>
  );
};

export default ForecastHourlyContainer;
