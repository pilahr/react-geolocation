import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login/Login";
import Weather from "./pages/Weather/Weather";

const App = () => {
  const [user, setUser] = useState();
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("bangkok");

  const geolocationAPI = navigator.geolocation;

  const getUserLocation = () => {
    if (!geolocationAPI) {
      console.log("Geolocation not supported");
    } else {
      geolocationAPI.getCurrentPosition(success, error);
    }
  };

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation(`${latitude},${longitude}`);
  };

  const error = () => {
    setLocation("London");
  };

  const getWeatherData = async (location) => {
    const apiKey = `${process.env.REACT_APP_WEATHER_API_KEY}`;

    try {
      let url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}`;

      url += `&q=${location}&days=7&aqi=yes&alerts=no`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Sorry something went wrong!");
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (e) {
      alert(e.message);
    }
  };

  useEffect(() => {
    getUserLocation(location);
    getWeatherData(location);
  }, [location]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
        </Routes>

        {user && (
          <Routes>
            <Route
              path="/weather"
              element={
                <Weather
                  getUserLocation={getUserLocation}
                  weatherData={weatherData}
                  setLocation={setLocation}
                />
              }
            />
          </Routes>
        )}
      </Router>
    </>
  );
};

export default App;
