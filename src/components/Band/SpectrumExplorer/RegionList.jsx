import React from "react";
import BandsData from "../../../Data/Bands/data";

export default function RegionList({
  selectedLocation,
  selectedRegion,
  setSelectedRegion,
}) {
  const locationData = BandsData.find(
    (loc) => loc.location === selectedLocation
  );

  if (!locationData?.regions || !Array.isArray(locationData.regions)) return null;

  // Filter out any empty / invalid region entries
  const regions = locationData.regions.filter(
    (reg) => reg && typeof reg.region === "string" && reg.region.trim() !== ""
  );

  if (regions.length === 0) return null;

  return (
    <div className="flex flex-col space-y-2">
      {regions.map((reg, index) => {
        const isActive = selectedRegion === reg.region;

        return (
          <button
            key={index}
            onClick={() => setSelectedRegion(reg.region)}
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
            {reg.region}
          </button>
        );
      })}
    </div>
  );
}
