import React, { useState, useEffect } from "react";
import "./Weather.scss";
import Header from "../../components/Header/Header";
import Button from "../../../src/components/Button/Button";
import ForecastRow from "../../components/ForecastRow/ForecastRow";
import ForecastCard from "../../components/ForecastCard/ForecastCard";
import AirQuality from "../../assets/airQualityIcon.svg";
import Rain from "../../assets/rain.png";
import Wind from "../../assets/Wind.png";
import Humidity from "../../assets/humidity.png";
import Sunrise from "../../assets/sunrise.svg";
import Sunset from "../../assets/sunset.png";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import Searchbox from "../../components/Searchbox/Searchbox";

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

  const todayForecast = forecast[0];

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
          <Searchbox
            searchTerm={searchTerm}
            handleSearchInput={handleSearchInput}
          />
          <Button label="Search" onClick={handleSubmit} />
        </div>

        <div>
          <WeatherCard weatherData={weatherData} />
        </div>
        <div className="weather__wrap--blogs">
          <ForecastCard
            label="AIR QUALITY"
            icon={AirQuality}
            result={airQuality}
          />

          <ForecastCard
            label="CHANCE OF RAIN"
            icon={Rain}
            result={todayForecast.day.daily_chance_of_rain}
          />

          <ForecastCard
            label="WIND"
            icon={Wind}
            result={todayForecast.day.maxwind_mph}
          />

          <ForecastCard
            label="HUMIDITY"
            icon={Humidity}
            result={todayForecast.day.avghumidity}
          />

          <ForecastCard
            label="SUNRISE"
            icon={Sunrise}
            result={todayForecast.astro.sunrise}
          />

          <ForecastCard
            label="SUNSET"
            icon={Sunset}
            result={todayForecast.astro.sunset}
          />
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
      </div>
    </div>
  );
};

export default Weather;
