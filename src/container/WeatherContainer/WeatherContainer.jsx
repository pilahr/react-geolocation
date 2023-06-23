import React from "react";
import WeatherCard from "../../components/WeatherCard/WeatherCard";

const WeatherContainer = ({weatherData}) => {
  return (
    <div className="weatherContainer">
      <WeatherCard weatherData={weatherData}/>
    </div>
  );
};

export default WeatherContainer;
