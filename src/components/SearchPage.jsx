import React from "react";
import Search from "./Search.jsx";
import SearchResult from "./SearchResult.jsx";
import {Route} from "react-router-dom";
import BookShelves from "./BookShelves.jsx";

function SearchPage() {
  return (
    <>
      <Search />
      <SearchResult />
    </>
  );
}

export default SearchPage;
