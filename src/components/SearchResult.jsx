import React from 'react'
import { get, getAll, update, search } from "../BooksAPI.js";


function SearchResult(props) {
  return (
    <>
        <div>
           {props.searchTerm}
        </div>
        

    </>
  )
}

export default SearchResult