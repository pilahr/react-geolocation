import React from "react";
import "./WeatherCard.scss";
import location from "../../assets/location.png";

const WeatherCard = ({ weatherData }) => {
  let background = "weatherCard";
  let greeting = "";

  const currTime = weatherData.location.localtime.split(" ")[1];
  const currHour = currTime.split(":")[0];


  if (currHour <= 12) {
    background += " morning";
    greeting += "Good Morning!";
  } else if (currHour >= 12 && currHour <= 18) {
    background += " afternoon";
    greeting += "Good Afternoon!";
  } else if (currHour >= 18 || currHour < 5) {
    background += " evening";
    greeting += "Good Evening!";
  }

  const forecast = weatherData.forecast.forecastday[0];

  return (
    <>
      <div className="weatherCard__greeting">{greeting}</div>
      {Object.keys(weatherData).length > 0 && (
        <div className={background}>
          <div className="weatherCard__info">
            <div>
              <h3 className="weatherCard__info--text">
                {weatherData.current.temp_c} °C
              </h3>
            </div>

            <div>
              <p className="weatherCard__info--text">
                {weatherData.current.condition.text}
              </p>
            </div>

            <div className="weatherCard__info--wrap-location">
              <img
                className="weatherCard__info--location-icon"
                src={location}
                alt="location pin"
              />
              <h4 className="weatherCard__info--text-city">
                {weatherData.location.name}, {weatherData.location.country}
              </h4>
            </div>
            <h6 className="weatherCard__info--text-temp">
              {forecast.day.mintemp_c} - {forecast.day.maxtemp_c}°C
            </h6>
          </div>

          <div>
            <img
              className="weatherCard__info--icon"
              src={weatherData.current.condition.icon}
              alt="weather icon"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherCard;
