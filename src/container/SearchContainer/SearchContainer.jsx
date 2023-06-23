import React, { useState } from "react";
import Searchbox from "../../components/Searchbox/Searchbox";
import "./SearchContainer.scss";

const SearchContainer = ({ searchTerm, handleSearchInput }) => {

  // let searchedResult = (
  //   <h5 className="search-container__notFound">No Cities Found</h5>
  // );
  // if (searchTerm.length > 0) {
  //   searchedResult = (
  //     <>
  //       <WeatherContainer searchTerm={searchTerm} />
  //     </>
  //   );
  // }
  return (
    <div className="search-container">
      <div>
        <Searchbox
          handleSearchInput={handleSearchInput}
          searchTerm={searchTerm}
        />

        {/* {searchedResult} */}
      </div>
    </div>
  );
};

export default SearchContainer;
