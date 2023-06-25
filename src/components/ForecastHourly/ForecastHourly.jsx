import React from "react";
import "./ForecastHourly.scss";

const ForecastHourly = ({ hourlyData, currentHour }) => {
  //   const [time, setTime] = useState();

  //   const eachHour = hourlyData.map((hour) => {
  //     return parseInt(hour.time.split(" ")[1].split(":")[0]);
  //   });

  //   const getHour = () => {
  //     if (eachHour === currentHour) {
  //       setTime(0);
  //     } else if (eachHour > currentHour) {
  //       setTime(eachHour);
  //     } else {
  //       setTime(null);
  //     }
  //   };

  //   useEffect(() => {
  //     getHour();
  //   }, []);

  return (
    <>
      {hourlyData.map((hourOfTheDay, index) => {
        return (
          <div key={index} className="forecastHourly">
            <h4 className="forecastHourly__time">{parseInt(hourOfTheDay.time.split(" ")[1].split(":")[0])}</h4>
            <img className="forecastHourly__icon" src={hourOfTheDay.condition.icon} alt="weather icon" />
            <h4 className="forecastHourly__temp">{hourOfTheDay.temp_c}°</h4>
          </div>
        );
      })}
    </>
  );
};

export default ForecastHourly;
