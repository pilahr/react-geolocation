import React, { useState } from "react";
import "./Weather.scss";
import Header from "../../components/Header/Header";
import Button from "../../../src/components/Button/Button";
import ForecastRow from "../../components/ForecastRow/ForecastRow";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import Searchbox from "../../components/Searchbox/Searchbox";
import ForecastCardContainer from "../../container/ForecastCardContainer/ForecastCardContainer";
import ForecastHourlyContainer from "../../container/ForecastHourlyContainer/ForecastHourlyContainer";
import TodoListContainer from "../../container/TodoListContainer/TodoListContainer";

const Weather = ({ weatherData, setLocation, getUserLocation }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const handleSubmit = () => {
    setLocation(searchTerm);
    getUserLocation(searchTerm);
  };

  const forecast = weatherData.forecast.forecastday;

  return (
    <div className="weather">
      <div>
        <Header />
      </div>

      <div className="weather__wrap">
        <div className="weather__wrap--search-and-btn">
          <Searchbox
            searchTerm={searchTerm}
            handleSearchInput={handleSearchInput}
          />
          <Button label="Search" onClick={handleSubmit} />
        </div>

        <div>
          <WeatherCard weatherData={weatherData} />
        </div>
        <div>
          <ForecastHourlyContainer
            forecast={forecast}
            weatherData={weatherData}
          />
        </div>
        <div>
          <ForecastCardContainer weatherData={weatherData} />
        </div>

        <div className="weather__wrap--forecastRow">
          {forecast.map((day, index) => {
            return (
              <div key={index}>
                <ForecastRow day={day} />
              </div>
            );
          })}
        </div>

        <div>
          <TodoListContainer />
        </div>
      </div>
    </div>
  );
};

export default Weather;
