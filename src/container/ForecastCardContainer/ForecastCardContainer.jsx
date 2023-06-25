import React, { useState, useEffect } from "react";
import "./ForecastCardContainer.scss";
import ForecastCard from "../../components/ForecastCard/ForecastCard";
import AirQuality from "../../assets/airQualityIcon.svg";
import Rain from "../../assets/rain.png";
import Wind from "../../assets/Wind.png";
import Humidity from "../../assets/humidity.png";
import Sunrise from "../../assets/sunrise.svg";
import Sunset from "../../assets/sunset.png";

const ForecastCardContainer = ({ weatherData }) => {
  const [airQuality, setAirQuality] = useState("");

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
    <div className="forecastCardContainer">
      <ForecastCard label="AIR QUALITY" icon={AirQuality} result={airQuality} />

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
  );
};

export default ForecastCardContainer;
