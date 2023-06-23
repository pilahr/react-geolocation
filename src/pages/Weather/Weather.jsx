import React from "react";
import "./Weather.scss";
import Header from "../../components/Header/Header";
import SearchContainer from "../../container/SearchContainer/SearchContainer";

const Weather = ({ getUserLocation }) => {
  return (
    <div className="weather">
      <div>
        <Header />
      </div>
      <div>
        <SearchContainer />
      </div>
      <h2>hello</h2>

      <button onClick={getUserLocation}>Get my location</button>
    </div>
  );
};

export default Weather;
