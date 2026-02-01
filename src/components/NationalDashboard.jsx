import React from "react";
import { Doughnut } from "react-chartjs-2";
import { computeNationalStats } from "../utils/spectrumCalculations";

export default function NationalDashboard() {
  const { avgUtilization, categorySizesMHz, bandAverages } =
    computeNationalStats();

  const donutData = {
    labels: ["Utilized", "Free"],
    datasets: [
      {
        data: [avgUtilization, 100 - avgUtilization],
        backgroundColor: ["#6A0DAD", "#E5E7EB"],
        borderWidth: 0,
      },
    ],
  };

  const donutOptions = {
    cutout: "70%",
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
  };

  const formatMHz = (v) =>
    v >= 1000 ? `${(v / 1000).toFixed(2)} GHz` : `${v.toFixed(2)} MHz`;

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8">

      {/* LEFT PANEL */}
      <div className="flex-1 bg-white rounded-xl shadow-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-[#4F00B6] mb-4">
          National Spectrum Utilization (100 kHz – 6 GHz)
        </h2>

        <div className="flex justify-center mb-6">
          <div className="w-48 h-48 relative">
            <Doughnut data={donutData} options={donutOptions} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-extrabold text-[#4F00B6]">
                {avgUtilization.toFixed(2)}%
              </span>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-[#4F00B6] mb-3">
          Spectrum Size by Utilization Category
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 text-sm">
          <div className="flex justify-between bg-gray-100 rounded-lg px-3 py-2">
            <span>Unused (0%)</span>
            <span>{formatMHz(categorySizesMHz.unused)}</span>
          </div>
          <div className="flex justify-between bg-gray-100 rounded-lg px-3 py-2">
            <span>Low (1–30%)</span>
            <span>{formatMHz(categorySizesMHz.low)}</span>
          </div>
          <div className="flex justify-between bg-gray-100 rounded-lg px-3 py-2">
            <span>Moderate (30–80%)</span>
            <span>{formatMHz(categorySizesMHz.moderate)}</span>
          </div>
          <div className="flex justify-between bg-gray-100 rounded-lg px-3 py-2">
            <span>High (80–100%)</span>
            <span>{formatMHz(categorySizesMHz.high)}</span>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 bg-white rounded-xl shadow-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-[#4F00B6] mb-4">
          Band Range Utilization Averages
        </h2>

        <div className="space-y-3 text-gray-700 text-sm">
          <div className="flex justify-between bg-gray-100 rounded-lg px-3 py-2">
            <span>100 kHz – 30 MHz</span>
            <span className="text-lg font-bold text-[#4F00B6]">
              {bandAverages.band1.toFixed(2)}%
            </span>
          </div>
          <div className="flex justify-between bg-gray-100 rounded-lg px-3 py-2">
            <span>30 – 300 MHz</span>
            <span className="text-lg font-bold text-[#4F00B6]">
              {bandAverages.band2.toFixed(2)}%
            </span>
          </div>
          <div className="flex justify-between bg-gray-100 rounded-lg px-3 py-2">
            <span>300 MHz – 3 GHz</span>
            <span className="text-lg font-bold text-[#4F00B6]">
              {bandAverages.band3.toFixed(2)}%
            </span>
          </div>
          <div className="flex justify-between bg-gray-100 rounded-lg px-3 py-2">
            <span>3 – 6 GHz</span>
            <span className="text-lg font-bold text-[#4F00B6]">
              {bandAverages.band4.toFixed(2)}%
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
