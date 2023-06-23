import React, { useState } from "react";
import "./Weather.scss";
import Header from "../../components/Header/Header";
import SearchContainer from "../../container/SearchContainer/SearchContainer";
import WeatherContainer from "../../container/WeatherContainer/WeatherContainer";
import Button from "../../../src/components/Button/Button";
import ForecastCard from "../../components/ForecastCard/ForecastCard";

const Weather = ({ getUserLocation, weatherData, setLocation }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const handleSubmit = () => {
    setLocation(searchTerm);
  };

  const forecast = weatherData.forecast.forecastday;

  return (
    <div className="weather">
      <div>
        <Header />
      </div>

      <div className="weather__wrap">
        <div>
          <SearchContainer
            searchTerm={searchTerm}
            handleSearchInput={handleSearchInput}
          />
        </div>
        <div>
          <Button label="Search" onClick={handleSubmit} />
        </div>
        <div>
          <Button label="Get my location" onClick={getUserLocation} />
        </div>

        <div>
          <WeatherContainer weatherData={weatherData} />
        </div>
        <div className="weather__wrap--forecastCard">
                  {forecast.map((day, index) => {
          return (
            <div key={index} >
              <ForecastCard weatherData={weatherData} day={day} />
            </div>
          );
        })}
        </div>

      </div>
    </div>
  );
};

export default Weather;
