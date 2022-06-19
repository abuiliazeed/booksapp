import React from "react";
import Book from "./Book";
import BookGrid from "./BookGrid";

function BookShelf(props) {
  return (
    <>
      <div>
        <div className="p-4">
          <div className="text-2xl font-bold text-indigo-600 p-2">
            {props.title}
          </div>
          <div className="border-b-4 border-indigo-300"></div>
        </div>
        <BookGrid />

        

        
      </div>
    </>
  );
}

export default BookShelf;
