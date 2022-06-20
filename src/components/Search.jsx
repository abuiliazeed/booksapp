import React from "react";
import {BiArrowBack} from 'react-icons/bi';
import SearchResult from "./SearchResult.jsx";
import { get, getAll, update, search } from "../BooksAPI.js";


function Search() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const data = async (searchTerm) => {
    try {
      const result = await search(searchTerm);
      console.log(result);
    }catch (e) {
      console.log(e);
    }
    
  }

  return (
    <>
      <div className="flex flex-row  items-center shadow-lg">
        <button><BiArrowBack  className="p-2 mr-2 text-gray-300 bg-gray-100 h-20 w-20" /></button>
        <input onChange={e => {setSearchTerm(e.target.value)}} placeholder="Search by book title or author" className="w-full h-20 text-gray-500 text-2xl px-2 mx-4 focus:outline-none "></input>

        {console.log(data(searchTerm))}

     
    
      </div>
      <div>
       

      </div>



    </>
  );
}

export default Search;
