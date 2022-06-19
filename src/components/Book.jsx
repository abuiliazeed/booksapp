import React from "react";
import ShelfChanger from "./ShelfChanger";

function Book(props) {
  return (
    <>
      
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={props.image} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{props.title}</div>
            <p class="text-gray-700 text-base">{props.authors}</p>
          </div>
          <ShelfChanger />
        </div>
      
    </>
  );
}

export default Book;
