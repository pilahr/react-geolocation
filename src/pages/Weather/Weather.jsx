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
        <h1>Secret Number is: {process.env.REACT_APP_SECRET_KEY}</h1>
      </div>
    </div>
  );
};

export default Weather;
