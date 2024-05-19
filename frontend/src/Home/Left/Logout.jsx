import React from "react";
import { TbLogout2 } from "react-icons/tb";

const Logout = () => {
  return (
    <div className="h-[5vh]">
      <div className="relative">
        <TbLogout2 title="Logout" className="text-5xl absolute p-2 ml-2 mt-1 text-white hover:bg-slate-700 cursor-pointer rounded-full duration-500" />
      </div>
    </div>
  );
};

export default Logout;
