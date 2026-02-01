import React, { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  SignalIcon,
  ChartBarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import NationalDashboard from "../../NationalDashboard.jsx";
import LocationDashboard from "../../LocationDashboard.jsx";
import BandDashboard from "../../BandDashboard.jsx";
import BandsData from "../../../Data/Bands/data";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ResultPanel({
  result,
  selectedLocation,
  selectedRegion,
  selectedBand,
  selectedSubband,
  hasBandSelection,
}) {
  const [utilOpen, setUtilOpen] = useState(true);
  const [notUtilOpen, setNotUtilOpen] = useState(true);

  const normalize = (str) => (str ? str.replace(/\s+/g, "") : "");

  const locationObj = BandsData.find(
    (loc) => loc.location === selectedLocation
  );

  const isMultiRegion = !!locationObj?.regions;

  const displayName = selectedRegion || selectedLocation;

  /* ---------------------------------------------------------
     1) NATIONAL DASHBOARD
  --------------------------------------------------------- */
  if (!selectedLocation) {
    return (
      <div className="space-y-8 animate-fadeIn">
        <NationalDashboard />
        <div className="text-center text-[#A0522D] font-bold text-2xl lg:text-3xl drop-shadow-xl tracking-wide">
          Select a location from the sidebar to explore spectrum utilization.
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------
     2A) MULTI-REGION LOCATION: SELECT REGION FIRST
  --------------------------------------------------------- */
  if (isMultiRegion && !selectedRegion) {
    return (
      <div className="space-y-8 animate-fadeIn">
        <LocationDashboard locationName={selectedLocation} />
        <div className="text-center text-[#A0522D] font-bold text-2xl lg:text-3xl drop-shadow-xl tracking-wide">
          Select a region to view detailed utilization for {selectedLocation}.
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------
     2B) REGION SELECTED: SHOW REGION DASHBOARD
  --------------------------------------------------------- */
  if (isMultiRegion && selectedRegion && !selectedBand) {
    return (
      <div className="space-y-8 animate-fadeIn">
        <LocationDashboard locationName={selectedRegion} />
        <div className="text-center text-[#A0522D] font-bold text-2xl lg:text-3xl drop-shadow-xl tracking-wide">
          Select a band to view detailed results for {selectedRegion}.
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------
     2C) NORMAL LOCATION (NO REGIONS)
  --------------------------------------------------------- */
  if (!isMultiRegion && selectedLocation && !hasBandSelection) {
    return (
      <div className="space-y-8 animate-fadeIn">
        <LocationDashboard locationName={selectedLocation} />
        <div className="text-center text-[#A0522D] font-bold text-2xl lg:text-3xl drop-shadow-xl tracking-wide">
          Select a band to view detailed results for {selectedLocation}.
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------
     3) BAND DASHBOARD
  --------------------------------------------------------- */
  let bandObj = null;

  if (isMultiRegion) {
    const regionObj = locationObj.regions?.find(
      (r) => r.region === selectedRegion
    );
    bandObj = regionObj?.bands?.find(
      (b) => normalize(b.range) === normalize(selectedBand)
    );
  } else {
    bandObj = locationObj.bands?.find(
      (b) => normalize(b.range) === normalize(selectedBand)
    );
  }

  if (bandObj?.subbands && !selectedSubband) {
    return (
      <div className="space-y-8 animate-fadeIn">
        <BandDashboard bandName={bandObj.range} bandData={bandObj.subbands} />

        <div className="text-center text-[#A0522D] font-bold text-xl lg:text-2xl drop-shadow-xl tracking-wide">
          Select a subband to view detailed results of utilized and unutilized frequencies.
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------
     4) SUBBAND RESULT PANEL
  --------------------------------------------------------- */
  if (!result) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 space-y-4 animate-fadeIn">
        <h2 className="text-2xl font-bold text-[#001F54]">
          Select a Band or Subband to View Detailed Results
        </h2>

        <p className="text-gray-600 max-w-md">
          Choose a band or subband within {displayName} to analyze duty
          cycle, utilized frequencies, and unused spectrum.
        </p>
      </div>
    );
  }

  /* ---------------------------------------------------------
     5) DETAILED RESULT PANEL
  --------------------------------------------------------- */
  const duty = parseFloat(result.utilization || "0");
  const utilized = result.frequencies?.utilized || [];
  const notUtilized = result.frequencies?.notutilized || [];

  const dutyLabel =
    duty >= 80 ? "High congestion" : duty >= 30 ? "Moderate" : "Low";

  const donutData = {
    labels: ["Utilized", "Free"],
    datasets: [
      {
        data: [duty, 100 - duty],
        backgroundColor: [
          duty >= 80 ? "#EF4444" : duty >= 30 ? "#F59E0B" : "#22C55E",
          "#E5E7EB",
        ],
        borderWidth: 0,
      },
    ],
  };

  const donutOptions = {
    cutout: "70%",
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
  };

  return (
    <div className="space-y-8 animate-fadeIn">

      {/* Duty Cycle */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex items-center space-x-3 mb-4">
          <ClockIcon className="w-7 h-7 text-[#001F54]" />
          <h2 className="text-xl font-semibold">Duty Cycle</h2>
        </div>

        <div className="flex items-center space-x-8">
          <div className="w-40 h-40 relative">
            <Doughnut data={donutData} options={donutOptions} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-[#001F54]">
                {duty}%
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="px-3 py-2 bg-gray-100 rounded-lg border text-gray-700 shadow-sm">
              <strong>Status:</strong> {dutyLabel}
            </div>
          </div>
        </div>
      </div>

      {/* Utilized Frequencies */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <button
          onClick={() => setUtilOpen(!utilOpen)}
          className="flex items-center justify-between w-full"
        >
          <div className="flex items-center space-x-3">
            <SignalIcon className="w-7 h-7 text-green-600" />
            <h2 className="text-xl font-semibold">Utilized Frequencies</h2>
          </div>
          {utilOpen ? (
            <ChevronUpIcon className="w-6 h-6 text-gray-600" />
          ) : (
            <ChevronDownIcon className="w-6 h-6 text-gray-600" />
          )}
        </button>

        {utilOpen && (
          <ul className="mt-4 space-y-2 transition-all duration-300">
            {utilized.length === 0 ? (
              <p className="text-gray-500">No utilized frequencies.</p>
            ) : (
              utilized.map((freq, index) => (
                <li
                  key={index}
                  className="px-4 py-2 bg-green-50 border border-green-200 rounded-lg text-green-800"
                >
                  {freq}
                </li>
              ))
            )}
          </ul>
        )}
      </div>

      {/* Not Utilized Frequencies */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <button
          onClick={() => setNotUtilOpen(!notUtilOpen)}
          className="flex items-center justify-between w-full"
        >
          <div className="flex items-center space-x-3">
            <ChartBarIcon className="w-7 h-7 text-red-600" />
            <h2 className="text-xl font-semibold">Not Utilized Frequencies</h2>
          </div>
          {notUtilOpen ? (
            <ChevronUpIcon className="w-6 h-6 text-gray-600" />
          ) : (
            <ChevronDownIcon className="w-6 h-6 text-gray-600" />
          )}
        </button>

        {notUtilOpen && (
          <ul className="mt-4 space-y-2 transition-all duration-300">
            {notUtilized.length === 0 ? (
              <p className="text-gray-500">No unused frequencies.</p>
            ) : (
              notUtilized.map((freq, index) => (
                <li
                  key={index}
                  className="px-4 py-2 bg-red-50 border border-red-200 rounded-lg text-red-800"
                >
                  {freq}
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
