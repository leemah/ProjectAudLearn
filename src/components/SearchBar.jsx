import React from "react";
import { MdSearch } from "react-icons/md";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center  h-16">
      <div className="flex items-center rounded-full border border-orange-500 overflow-hidden w-full max-w-lg">
        <input
          type="text"
          placeholder="Search for anything"
          className="w-full px-4 py-2 text-black outline-none"
        />
        <button className="bg-orange-500 p-2 flex justify-center items-center">
          <MdSearch className="text-white h-6 w-6" />{" "}
          {/* Using FaSearch from React Icons */}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
