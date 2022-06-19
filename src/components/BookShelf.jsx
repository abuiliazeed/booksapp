import React from "react";

function BookShelf(props) {
  return (
    <>
      <div className="p-4">
        <div className="text-2xl font-bold text-indigo-600 p-2">{props.title}</div>
        <div className="border-b-4 border-indigo-300"></div>
      </div>
    </>
  );
}

export default BookShelf;
