import React from "react";

const Chattuser = () => {
  return (
    <div className="flex space-x-3 h-[8vh] items-center justify-center bg-gray-800 hover:bg-gray-700 duration-500">
      <div className="avatar online">
        <div className="w-16 rounded-full p-2">
          <img src="https://avatar.iran.liara.run/public/job/doctor/male" />
        </div>
      </div>
      <div>
        <h1 className="text-xl text-white">Dr. Prashant Kumar Joshi</h1>
        <span className="text-sm text-gray-400">Online</span>
      </div>
    </div>
  );
};

export default Chattuser;
