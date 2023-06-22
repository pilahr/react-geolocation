import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login/Login";
import Weather from "./pages/Weather/Weather";

const App = () => {
  const [user, setUser] = useState();
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("london");

  const geolocationAPI = navigator.geolocation;

  const getUserLocation = () => {
    if (!geolocationAPI) {
      console.log("Geolocation API is not available in your browser!");
    } else {
      geolocationAPI.getCurrentPosition(success, error);
    }
  };
  const success = (location) => {
    const latitude = location.coords.latitude;
    const longitude = location.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  };

  const error = () => {
    console.log("Unable to retrieve your location");
  };

  

  const getWeatherData = async (city) => {
    const apiKey = `${process.env.REACT_APP_WEATHER_API_KEY}`;

    try {
      let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}`;

      const response = await fetch(
        url + `&q=${city[0].toUpperCase() + city.slice(1)}&days=7&aqi=yes`
      );

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
    getWeatherData(city);
  }, [city]);

  // console.log(weatherData);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
        </Routes>

        {user && (
          <Routes>
            <Route path="/weather" element={<Weather />} />
          </Routes>
        )}
      </Router>
    </>
  );
};

export default App;
