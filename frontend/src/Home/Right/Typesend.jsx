import React from "react";
import { GrSend } from "react-icons/gr";

const Typesend = () => {
  return (
    <div className="flex space-x-1 h-[8vh] items-center bg-gray-800">
      <div className="w-[70%] mx-4 my-2">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered rounded-xl px-4 py-3 mt-1 border-gray-700 outline-none w-full"
        />
      </div>
      <button>
        <GrSend className="text-[2.5rem] p-1 hover:text-green-500 duration-300" />
      </button>
    </div>
  );
};

export default Typesend;
