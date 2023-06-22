import React from "react";
import "./Weather.scss";
import Header from "../../components/Header/Header";

const Weather = () => {
  return (
    <div className="weather">
      <div>
        <Header />
      </div>
      <div>
        <h1>Hello this is weather page</h1>
      </div>
    </div>
  );
};

export default Weather;
