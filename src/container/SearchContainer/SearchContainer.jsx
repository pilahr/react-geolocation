import React, { useState } from "react";
import Searchbox from "../../components/Searchbox/Searchbox";
import "./SearchContainer.scss";

const SearchContainer = ({ weatherData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  let searchedResult = <h5 className="search-container__notFound">No Cities Found</h5>;
  if (searchTerm.length > 0) {
    searchedResult = <></>;
  }
  return (
    <div className="search-container">
      <div>
        <Searchbox
          handleSearchInput={handleSearchInput}
          searchTerm={searchTerm}
        />
        {searchedResult}
      </div>
    </div>
  );
};

export default SearchContainer;
