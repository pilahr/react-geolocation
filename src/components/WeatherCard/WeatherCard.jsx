import React from "react";
import "./WeatherCard.scss";

const WeatherCard = ({ weatherData }) => {
  let background = "weatherCard";

  const currTime = weatherData.location.localtime.split(" ")[1];
  const currHour = currTime.split(":")[0]

  console.log(currHour);
  console.log(weatherData.location.localtime.split(" ")[1]);

    if (currHour >= 5 && currHour <= 12) {
      background += " morning";
    } else if (currHour >= 12 && currHour <= 18) {
      background += " afternoon";
    } else if (currHour >=18) {
      background += " evening";
    }

  return (
    <>
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

            <div>
              <h4 className="weatherCard__info--text-city">
                {weatherData.location.name}, {weatherData.location.country}
              </h4>
              <h6 className="weatherCard__info--text-temp">20 - 30 °C</h6>
            </div>
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
