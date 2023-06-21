import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login/Login";
import Weather from "./pages/Weather/Weather";

const App = () => {
  const [user, setUser] = useState();

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
