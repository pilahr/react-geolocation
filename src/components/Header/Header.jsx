import React from "react";
import "./Header.scss";
import Home from "../../assets/home.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="heading">
      <div>
        <Link to="/">
          <img className="heading__home-icon" src={Home} alt="Home icon" />
        </Link>
      </div>
      <h2 className="heading__text">InTheAir</h2>
    </div>
  );
};

export default Header;
