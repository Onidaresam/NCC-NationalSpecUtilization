import React from "react";
import LocationList from "./LocationList";
import RegionList from "./RegionList";
import BandList from "./BandList";
import SubbandList from "./SubbandList";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  selectedLocation,
  setSelectedLocation,
  selectedRegion,
  setSelectedRegion,
  selectedBand,
  setSelectedBand,
  selectedSubband,
  setSelectedSubband,
}) {
  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="lg:hidden p-3 bg-gradient-to-r from-[#4F00B6] to-[#8E2DE2] text-white shadow-lg fixed top-4 left-4 z-50 rounded-md font-semibold"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar container */}
      <div
        className={`
          fixed lg:static top-0 left-0 h-full 
          bg-gradient-to-b from-[#1F2A44] to-[#F3F4F6]
          shadow-[0_0_25px_#8E2DE2] border-r border-purple-300/30
          transition-transform duration-300 
          w-[320px] z-40 
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Scrollable content */}
        <div className="h-full overflow-y-auto p-5 space-y-6">

          {/* Section: Location */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/20 p-4 hover:bg-white/20 transition">
            <h2 className="font-bold text-lg mb-3 text-white tracking-wide">
              Location
            </h2>
            <LocationList
              selectedLocation={selectedLocation}
              setSelectedLocation={(loc) => {
                setSelectedLocation(loc);
                setSelectedRegion(null);
                setSelectedBand(null);
                setSelectedSubband(null);
              }}
            />
          </div>

          {/* Section: Region (Lagos only) */}
          {selectedLocation === "Lagos" && (
            <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/20 p-4 hover:bg-white/20 transition">
              <h2 className="font-bold text-lg mb-3 text-white tracking-wide">
                Region
              </h2>
              <RegionList
                selectedLocation={selectedLocation}
                selectedRegion={selectedRegion}
                setSelectedRegion={(reg) => {
                  setSelectedRegion(reg);
                  setSelectedBand(null);
                  setSelectedSubband(null);
                }}
              />
            </div>
          )}

          {/* Section: Bands */}
          {selectedLocation && (
            <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/20 p-4 hover:bg-white/20 transition">
              <h2 className="font-bold text-lg mb-3 text-white tracking-wide">
                Bands
              </h2>
              <BandList
                selectedLocation={selectedLocation}
                selectedRegion={selectedRegion}
                selectedBand={selectedBand}
                setSelectedBand={(band) => {
                  setSelectedBand(band);
                  setSelectedSubband(null);
                }}
              />
            </div>
          )}

          {/* Section: Subbands */}
          {selectedBand && (
            <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/20 p-4 hover:bg-white/20 transition">
              <h2 className="font-bold text-lg mb-3 text-white tracking-wide">
                Sub‑Bands
              </h2>
              <SubbandList
                selectedLocation={selectedLocation}
                selectedRegion={selectedRegion}
                selectedBand={selectedBand}
                selectedSubband={selectedSubband}
                setSelectedSubband={setSelectedSubband}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}