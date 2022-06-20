import React from "react";
import Book from "./Book";

function BookGrid() {
  return (
    <>
      <div className="flex flex-row p-4">
        <Book
          image="https://images-na.ssl-images-amazon.com/images/I/71k6YnPTVvL.jpg"
          title="How to read a person like a book?"
          authors="Gerard , Henry, Grayson"
        />
        <Book
          image="https://content.wepik.com/statics/1374865/business-book-cover-10684532page1.jpg"
          title="How to read a person like a book?"
          authors="Gerard , Henry, Grayson"
        />
      </div>
    </>
  );
}

export default BookGrid;
