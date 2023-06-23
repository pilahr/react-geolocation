import React from "react";
import "./Weather.scss";
import Header from "../../components/Header/Header";
import SearchContainer from "../../container/SearchContainer/SearchContainer";

const Weather = ({ getUserLocation, weatherData }) => {
  return (
    <div className="weather">
      <div>
        <Header />
      </div>
      <div>
        <SearchContainer weatherData={weatherData}/>
      </div>
      <h2>hello</h2>

      <button onClick={getUserLocation}>Get my location</button>
    </div>
  );
};

export default Weather;
