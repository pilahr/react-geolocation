import React, { useState } from "react";
import "./Weather.scss";
import Header from "../../components/Header/Header";
import SearchContainer from "../../container/SearchContainer/SearchContainer";
import WeatherContainer from "../../container/WeatherContainer/WeatherContainer";
import Button from "../../../src/components/Button/Button";

const Weather = ({ getUserLocation, weatherData, setLocation }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const handleSubmit = () => {
    setLocation(searchTerm);
  };

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
      </div>
    </div>
  );
};

export default Weather;
