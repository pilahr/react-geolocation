import React from "react";
import "./ForecastHourly.scss";

const ForecastHourly = ({ hourlyData, tomorrowTime, currentHour }) => {
  const wantedHour = hourlyData.filter((each) => {
    return each.time.split(" ")[1].split(":")[0] >= currentHour;
  });

  return (
    <>
      {wantedHour.map((hourOfTheDay, index) => {
        const cleanHour = parseInt(
          hourOfTheDay.time.split(" ")[1].split(":")[0]
        );

        return (
          <div key={index} className="forecastHourly">
            <h4 className="forecastHourly__time">
              {cleanHour}
            </h4>
            <img
              className="forecastHourly__icon"
              src={hourOfTheDay.condition.icon}
              alt="weather icon"
            />
            <h4 className="forecastHourly__temp">{hourOfTheDay.temp_c}°</h4>
          </div>
        );
      })}

      {tomorrowTime.map((tomorrowHour, index) => {
        const cleanTmrHour = parseInt(tomorrowHour.time.split(" ")[1].split(":")[0])
      
        return (
          <div key={index} className="forecastHourly">
            <h4 className="forecastHourly__time">
              {cleanTmrHour}

            </h4>
            <img
              className="forecastHourly__icon"
              src={tomorrowHour.condition.icon}
              alt="weather icon"
            />
            <h4 className="forecastHourly__temp">{tomorrowHour.temp_c}°</h4>
          </div>
        );
      })}
    </>
  );
};

export default ForecastHourly;
