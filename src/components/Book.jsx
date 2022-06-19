import React from "react";
import ShelfChanger from "./ShelfChanger";

function Book(props) {
  return (
    <>
      
        <div class=" rounded-lg shadow-lg max-w-xs flex flex-col items-center mx-2">
          <img class="object-scale-down w-80 h-96 " src={props.image} alt="Sunset in the mountains" />
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
