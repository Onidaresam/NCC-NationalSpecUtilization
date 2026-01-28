import React from "react";
import BandsData from "../../../Data/Bands/data";

export default function SubbandList({
  selectedLocation,
  selectedRegion,
  selectedBand,
  selectedSubband,
  setSelectedSubband,
}) {
  const normalize = (str) => str.replace(/\s+/g, "");

  const locationData = BandsData.find(
    (loc) => loc.location === selectedLocation
  );
  if (!locationData) return null;

  let bandObj = null;

  if (selectedLocation === "Lagos") {
    const regionObj = locationData.region?.find(
      (r) => r.region === selectedRegion
    );
    bandObj = regionObj?.bands?.find(
      (b) => normalize(b.range) === normalize(selectedBand)
    );
  } else {
    bandObj = locationData.bands?.find(
      (b) => normalize(b.range) === normalize(selectedBand)
    );
  }

  if (!bandObj || !bandObj.subbands) return null;

  return (
    <div className="flex flex-col space-y-2">
      {bandObj.subbands.map((sub, index) => {
        const isActive =
          normalize(selectedSubband || "") === normalize(sub.range);

        return (
          <button
            key={index}
            onClick={() => setSelectedSubband(normalize(sub.range))}
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
            {sub.range}
          </button>
        );
      })}
    </div>
  );
}
