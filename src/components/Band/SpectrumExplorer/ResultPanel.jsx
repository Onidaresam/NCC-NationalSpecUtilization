import React, { useState, useEffect } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  SignalIcon,
  ChartBarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ResultPanel({ result }) {
  const [utilOpen, setUtilOpen] = useState(true);
  const [notUtilOpen, setNotUtilOpen] = useState(true);

  if (!result) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 space-y-4 animate-fadeIn">
  {/* Icon */}
  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4F00B6] to-[#8E2DE2] flex items-center justify-center shadow-lg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5h2l3 10h8l3-6h2"
      />
    </svg>
  </div>

  {/* Title */}
  <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4F00B6] to-[#8E2DE2] bg-clip-text text-transparent">
    Select a Location to Explore its Spectrum Utilization Profile
  </h2>

  {/* Subtitle */}
  <p className="text-gray-600 max-w-md">
    Choose a location from the sidebar to begin analyzing real‑time frequency
    utilization, congestion levels, and spectrum availability.
  </p>
</div>
    );
  }

  const duty = parseFloat(result.utilization || "0");
  const utilized = result.frequencies?.utilized || [];
  const notUtilized = result.frequencies?.notutilized || [];

  // Color logic
  const dutyColor =
    duty >= 80
      ? "bg-red-500"
      : duty >= 30
      ? "bg-yellow-500"
      : "bg-green-500";

  const dutyLabel =
    duty >= 80 ? "High congestion" : duty >= 30 ? "Moderate" : "Low";

  // Donut chart data
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
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 900,
      easing: "easeOutQuart",
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="space-y-8">

      {/* Duty Cycle Card */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex items-center space-x-3 mb-4">
          <ClockIcon className="w-7 h-7 text-[#4F00B6]" />
          <h2 className="text-xl font-semibold">Duty Cycle</h2>
        </div>

        {/* Donut + Value */}
        <div className="flex items-center space-x-8">
          <div className="w-40 h-40 relative">
            <Doughnut data={donutData} options={donutOptions} />

            {/* Center text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-[#4F00B6]">
                {duty}%
              </span>
            </div>
          </div>

          {/* Tooltip + Legend */}
          <div className="space-y-3">
            <div className="px-3 py-2 bg-gray-100 rounded-lg border text-gray-700 shadow-sm">
              <strong>Status:</strong> {dutyLabel}
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-green-500 rounded"></span>
                <span className="text-sm text-gray-700">Low (0–30%)</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-yellow-500 rounded"></span>
                <span className="text-sm text-gray-700">Moderate (30–80%)</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-red-500 rounded"></span>
                <span className="text-sm text-gray-700">High (80–100%)</span>
              </div>
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
