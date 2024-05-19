import React from "react";
import { FcSearch } from "react-icons/fc";

const Search = () => {
  return (
    <div className="h-[10vh]">
      <div className="px-6 py-4">
        <form action="">
          <div className="flex space-x-3">
            <label className="border-[1px] bg-slate-900 border-gray-800 rounded-lg p-3 flex items-center gap-2 w-[95%]">
              <input
                type="text"
                className="grow outline-none rounded-lg"
                placeholder="Search"
              />
            </label>
            <button>
              <FcSearch title="Search" className="text-5xl p-2 rounded-full hover:bg-gray-700 duration-500" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
