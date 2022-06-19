import React from "react";
import { FaBook } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="flex flex-row items-center justify-between p-4 bg-indigo-500">
        <div className="flex flex-row items-center">
          <FaBook className="text-white" size={32} />
          <div className="text-4xl font-bold text-white">BooksApp</div>
        </div>

        <div>
          <button className="bg-white hover:text-lg text-indigo-500 font-bold py-2 px-4 rounded">
            Add a Book
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
