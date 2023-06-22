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
        <p>Our secret key is {process.env.REACT_APP_SECRET_KEY}</p>
        console.log(process.env.REACT_APP_SECRET_KEY);
      </div>
    </div>
  );
};

export default Weather;
