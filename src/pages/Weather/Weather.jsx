import React from "react";
import "./Weather.scss";
import Header from "../../components/Header/Header";

const Weather = ({ location, getUserLocation }) => {
  return (
    <div className="weather">
      <div>
        <Header />
      </div>
      <h2>hello</h2>

      <button onClick={getUserLocation}>Get my location</button>

    </div>
  );
};

export default Weather;
