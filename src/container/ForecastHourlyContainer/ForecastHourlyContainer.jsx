import React from "react";
import "./ForecastHourlyContainer.scss";
import ForecastHourly from "../../components/ForecastHourly/ForecastHourly";

const ForecastHourlyContainer = ({ weatherData }) => {
  const currentTime = weatherData.location.localtime.split(" ")[1];
  const currentHour = parseInt(currentTime.split(":")[0]);

  const forecast = weatherData.forecast.forecastday;
  const today = forecast[0];

  const timeOfTheDay = today.hour;

  return (
    <div className="forecastHourlyContainer">
      <ForecastHourly hourlyData={timeOfTheDay} currentHour={currentHour} />
    </div>
  );
};

export default ForecastHourlyContainer;
