import React from "react";
import Chattuser from "./Chattuser";
import Messages from "./Messages";
import Typesend from "./Typesend";

const Right = () => {
  return (
    <div className="w-[70%] bg-slate-900 text-white">
      <Chattuser />
      <div className="flex-1 overflow-y-auto" style={{ maxHeight: "calc(92vh - 8vh)" }}>
        <Messages />
      </div>
      <Typesend />
    </div>
  );
};

export default Right;
