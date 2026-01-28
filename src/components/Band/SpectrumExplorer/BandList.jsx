import React from "react";
import BandsData from "../../../Data/Bands/data";

export default function BandList({
  selectedLocation,
  selectedRegion,
  selectedBand,
  setSelectedBand,
}) {
  const normalize = (str) => str.replace(/\s+/g, "");

  const locationData = BandsData.find(
    (loc) => loc.location === selectedLocation
  );
  if (!locationData) return null;

  let bands = [];

  if (selectedLocation === "Lagos") {
    const regionObj = locationData.region?.find(
      (r) => r.region === selectedRegion
    );
    bands = regionObj?.bands || [];
  } else {
    bands = locationData.bands || [];
  }

  return (
    <div className="flex flex-col space-y-2">
      {bands.map((band, index) => {
        const isActive = normalize(selectedBand || "") === normalize(band.range);

        return (
          <button
            key={index}
            onClick={() => setSelectedBand(normalize(band.range))}
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
            {band.range}
          </button>
        );
      })}
    </div>
  );
}
