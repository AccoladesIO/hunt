import { Context } from "@/context/Context";
import React from "react";
import { SearchIcons } from "@/lib/Icons";

const Search = () => {
  const { search, onChange } = React.useContext(Context);
  return (
    <div className="w-full h-[60dvh] p-4 flex flex-col items-center justify-center bg-white text-[#444] dark:bg-[#333] dark:text-white">
      <div className="container flex items-center justify-center bg-white text-[#444] dark:bg-[#333] dark:text-white border-none">
        <p className="glitch">
          <span aria-hidden="true">Hunt</span>
          Hunt
          <span aria-hidden="true">Hunt</span>
        </p>
      </div>
      <div className="w-full my-3 border border-[#333] dark:border-gray-300 p-2 rounded-[30px] max-w-[500px] mx-auto flex items-center justify-center gap-3">
        <input
          type="search"
          name="keyword"
          value={search}
          onChange={onChange}
          className="w-full bg-inherit dark:bg-inherit outline-none px-4 text-[#444] dark:text-white"
          placeholder="Search..."
        />
        <div className="flex items-center justify-center w-8 h-8 px-2 bg-blue-500 rounded-full ">
          <SearchIcons />
        </div>
      </div>
    </div>
  );
};

export default Search;
