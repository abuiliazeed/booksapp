import React from "react";

function ShelfChanger() {
  return (
    <>
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <select
            className="form-select text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
            <option selected >Move to</option>
            <option value="1">Currently Reading</option>
            <option value="2">Want to Read</option>
            <option value="3">Read</option>
            <option value="4">None</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default ShelfChanger;
