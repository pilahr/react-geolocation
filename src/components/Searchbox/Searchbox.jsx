import React from "react";
import "./Searchbox.scss";
import Search from "../../assets/search.png";

const Searchbox = ({ handleSearchInput, searchTerm }) => {
  return (
    <div className="search">
      <div className="searchbox">
        <div className="searchbox__wrap">
          <img
            className="searchbox__wrap--icon"
            src={Search}
            alt="search icon"
          />
          <input
            className="searchbox__wrap--input"
            type="text"
            placeholder="Search for a city..."
            onInput={handleSearchInput}
            value={searchTerm}
          />
        </div>
      </div>
    </div>
  );
};

export default Searchbox;
