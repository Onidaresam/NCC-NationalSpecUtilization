import React from "react";
import BandsData from "../../../Data/Bands/data";

export default function LocationList({ selectedLocation, setSelectedLocation }) {
  return (
    <div className="flex flex-col space-y-2">
      {BandsData.map((loc, index) => {
        const isActive = selectedLocation === loc.location;

        return (
          <button
            key={index}
            onClick={() => setSelectedLocation(loc.location)}
            className={`
              w-full text-left px-4 py-3 rounded-lg border 
              transition-all duration-200
              ${
                isActive
                  ? "bg-[#4F00B6] text-white border-[#4F00B6]"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
              }
            `}
          >
            {loc.location}
          </button>
        );
      })}
    </div>
  );
}