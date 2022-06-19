import React from "react";
import Book from "./Book";

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

        <Book image="https://images-na.ssl-images-amazon.com/images/I/71k6YnPTVvL.jpg" title="How to read a person like a book?" authors="Gerard , Henry, Grayson"/>

      </div>
    </>
  );
}

export default BookShelf;
