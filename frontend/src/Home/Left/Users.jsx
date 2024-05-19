import React from "react";
import User from "./User";

const Users = () => {
  return (
    <div>
      <h1 className="px-8 py-2 text-white font-bold bg-slate-800 rounded-md">
        Doctors For You
      </h1>
      <div className="flex-1 py-3 overflow-y-auto" style={{maxHeight:"calc(85vh - 5vh)"}}>
        <User />
      </div>
    </div>
  );
};

export default Users;
