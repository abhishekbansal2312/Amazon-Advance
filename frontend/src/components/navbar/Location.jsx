import React from "react";
import map from "../../assets/map.png";
export default function Location() {
  return (
    <div>
      <div className="flex items-center space-x-1 hover:border-2 h-full p-1 ">
        <img src={map} alt="" className=" h-6 w-6 " />
        <button className="text-left">
          <div className="text-sm text-gray-300 leading-none">
            Deliver to Delhi 110001
          </div>
          <div className="text-base font-bold text-white leading-none mt-1">
            Update Location
          </div>
        </button>
      </div>
    </div>
  );
}
