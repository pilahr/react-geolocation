import React from "react";
import "./Weather.scss";
import Header from "../../components/Header/Header";
import SearchContainer from "../../container/SearchContainer/SearchContainer";
import WeatherContainer from "../../container/WeatherContainer/WeatherContainer";
import Button from "../../../src/components/Button/Button";

const Weather = ({ getUserLocation, weatherData, handleSearchInput }) => {
  return (
    <div className="weather">
      <div>
        <Header />
      </div>
      <div className="weather__wrap">
        <div>
          <SearchContainer weatherData={weatherData} />
        </div>
        <div>
          <Button label="Search" onClick={handleSearchInput}/>
        </div>
        <div>
          <Button label="Get my location" onClick={getUserLocation} />
        </div>

        <div>
          <WeatherContainer weatherData={weatherData} />
        </div>
      </div>
    </div>
  );
};

export default Weather;
