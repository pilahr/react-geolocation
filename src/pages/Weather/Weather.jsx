import React, { useState, useEffect } from "react";
import "./Weather.scss";
import Header from "../../components/Header/Header";
import SearchContainer from "../../container/SearchContainer/SearchContainer";
import WeatherContainer from "../../container/WeatherContainer/WeatherContainer";
import Button from "../../../src/components/Button/Button";
import ForecastRow from "../../components/ForecastRow/ForecastRow";
import ForecastCard from "../../components/ForecastCard/ForecastCard";
import AirQuality from "../../assets/AirQuality.png";

const Weather = ({ weatherData, setLocation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [airQuality, setAirQuality] = useState("");

  const handleSearchInput = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const handleSubmit = () => {
    setLocation(searchTerm);
  };

  const forecast = weatherData.forecast.forecastday;

  // console.log(aqi);

  const getAirQuality = () => {
    const aqi = weatherData.current.air_quality["us-epa-index"];
    if (aqi === 1) {
      setAirQuality("Good");
    } else if (aqi === 2) {
      setAirQuality("Moderate");
    } else if (aqi === 3) {
      setAirQuality("Unhealthy for sensitive group");
    } else if (aqi === 4) {
      setAirQuality("Unhealthy");
    } else if (aqi === 5) {
      setAirQuality("Very Unhealthy");
    } else if (aqi === 6) {
      setAirQuality("Hazardous");
    }
  };

  useEffect(() => {
    getAirQuality();
  });

  return (
    <div className="weather">
      <div>
        <Header />
      </div>

      <div className="weather__wrap">
        <div className="weather__wrap--search-and-btn">
          <SearchContainer
            searchTerm={searchTerm}
            handleSearchInput={handleSearchInput}
          />
          <Button label="Search" onClick={handleSubmit} />
        </div>

        <div>
          <WeatherContainer weatherData={weatherData} />
        </div>
        <div>
          <ForecastCard
            label="Air Quality"
            icon={AirQuality}
            airQuality={airQuality}
            result={airQuality}
          />
        </div>

        <div className="weather__wrap--forecastCard">
          {forecast.map((day, index) => {
            return (
              <div key={index}>
                <ForecastRow day={day} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Weather;
