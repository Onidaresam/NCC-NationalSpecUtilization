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
        className="lg:hidden p-3 bg-white shadow-md fixed top-4 left-4 z-50 rounded-md"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar container */}
      <div
        className={`
          fixed lg:static top-0 left-0 h-full 
          bg-white shadow-lg border-r border-gray-200 
          transition-transform duration-300 
          w-[320px] z-40 
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Scrollable content */}
        <div className="h-full overflow-y-auto p-4 space-y-6">

          {/* Locations */}
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <h2 className="font-semibold text-lg mb-3">Location</h2>
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

          {/* Regions (Lagos only) */}
          {selectedLocation === "Lagos" && (
            <div className="bg-white rounded-xl shadow-sm border p-4">
              <h2 className="font-semibold text-lg mb-3">Region</h2>
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

          {/* Bands */}
          {selectedLocation && (
            <div className="bg-white rounded-xl shadow-sm border p-4">
              <h2 className="font-semibold text-lg mb-3">Bands</h2>
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

          {/* Subbands */}
          {selectedBand && (
            <div className="bg-white rounded-xl shadow-sm border p-4">
              <h2 className="font-semibold text-lg mb-3">Sub‑Bands</h2>
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
