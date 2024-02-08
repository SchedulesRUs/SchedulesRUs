import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder, searchUser, handleSearchUser }) => {
  
  return (
    <div className="flex gap-2 rounded-md bg-[#f1efefe9] items-center">
      <MdSearch size={30} />
      <input
        text="text"
        placeholder={placeholder}
        className="border border-gray-300 rounded-lg px-3 py-2"
        value={searchUser}
        onChange={handleSearchUser}
      />
    </div>
  );
};

export default Search;
