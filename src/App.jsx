import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login/Login";
import Weather from "./pages/Weather/Weather";

const App = () => {
  const [user, setUser] = useState();
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("china");
  const [location, setLocation] = useState(null);

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
    setLocation({ latitude, longitude });
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  };

  const error = () => {
    console.log("Unable to retrieve your location");
  };

  const getWeatherData = async (city) => {
    const apiKey = `${process.env.REACT_APP_WEATHER_API_KEY}`;

    try {
      let url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}`;

      const response = await fetch(
        url +
          `&q=${city[0].toUpperCase() + city.slice(1)}&days=7&aqi=yes&alerts=no`
      );

      if (!response.ok) {
        throw new Error("Sorry something went wrong!");
      }

      const data = await response.json();
      setWeatherData(data);
      setCity(city);
    } catch (e) {
      alert(e.message);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  console.log("location is : ", location);

  useEffect(() => {
    getWeatherData(city);
  }, [city]);

  console.log("weather data is: ", weatherData);

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
