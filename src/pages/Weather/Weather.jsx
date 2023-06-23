import React from "react";
import "./Weather.scss";
import Header from "../../components/Header/Header";
import SearchContainer from "../../container/SearchContainer/SearchContainer";
import WeatherContainer from "../../container/WeatherContainer/WeatherContainer";

const Weather = ({ getUserLocation, weatherData }) => {
  return (
    <div className="weather">
      <div>
        <Header />
      </div>
      <div className="weather__wrap">
        <div>
          <SearchContainer weatherData={weatherData} />
        </div>

        <button onClick={getUserLocation}>Get my location</button>
        <div>
          <WeatherContainer />
        </div>
      </div>
    </div>
  );
};

export default Weather;
