import React, { useState, useEffect } from "react";

export default function ResultPanel({ result }) {
  const [utilPage, setUtilPage] = useState(1);
  const [notUtilPage, setNotUtilPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    setUtilPage(1);
    setNotUtilPage(1);
  }, [result]);

  if (!result) {
    return (
      <div className="w-full h-full flex items-center justify-center text-gray-500 text-lg">
        No available data. Select a band or sub‑band.
      </div>
    );
  }

  // FIXED: match your actual data structure
  const dutyCycle = result.utilization || "N/A";
  const utilized = result.frequencies?.utilized || [];
  const notUtilized = result.frequencies?.notutilized || [];

  const utilStart = (utilPage - 1) * ITEMS_PER_PAGE;
  const utilEnd = utilStart + ITEMS_PER_PAGE;

  const notStart = (notUtilPage - 1) * ITEMS_PER_PAGE;
  const notEnd = notStart + ITEMS_PER_PAGE;

  const utilPageCount = Math.ceil(utilized.length / ITEMS_PER_PAGE);
  const notPageCount = Math.ceil(notUtilized.length / ITEMS_PER_PAGE);

  return (
    <div className="space-y-8">

      {/* Duty Cycle */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-xl font-semibold mb-4">Duty Cycle</h2>
        <p className="text-3xl font-bold text-[#4F00B6]">
          {dutyCycle}
        </p>
      </div>

      {/* Utilized Frequencies */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-xl font-semibold mb-4">Utilized Frequencies</h2>

        {utilized.length === 0 ? (
          <p className="text-gray-500">No utilized frequencies.</p>
        ) : (
          <>
            <ul className="space-y-2">
              {utilized.slice(utilStart, utilEnd).map((freq, index) => (
                <li
                  key={index}
                  className="px-4 py-2 bg-gray-100 rounded-lg border text-gray-800"
                >
                  {freq}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between mt-4">
              <button
                disabled={utilPage === 1}
                onClick={() => setUtilPage(utilPage - 1)}
                className="px-3 py-1 rounded-md border bg-white disabled:opacity-40"
              >
                Prev
              </button>

              <span className="text-gray-600">
                Page {utilPage} of {utilPageCount}
              </span>

              <button
                disabled={utilPage === utilPageCount}
                onClick={() => setUtilPage(utilPage + 1)}
                className="px-3 py-1 rounded-md border bg-white disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>

      {/* Not Utilized Frequencies */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-xl font-semibold mb-4">Not Utilized Frequencies</h2>

        {notUtilized.length === 0 ? (
          <p className="text-gray-500">No unused frequencies.</p>
        ) : (
          <>
            <ul className="space-y-2">
              {notUtilized.slice(notStart, notEnd).map((freq, index) => (
                <li
                  key={index}
                  className="px-4 py-2 bg-gray-100 rounded-lg border text-gray-800"
                >
                  {freq}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between mt-4">
              <button
                disabled={notUtilPage === 1}
                onClick={() => setNotUtilPage(notUtilPage - 1)}
                className="px-3 py-1 rounded-md border bg-white disabled:opacity-40"
              >
                Prev
              </button>

              <span className="text-gray-600">
                Page {notUtilPage} of {notPageCount}
              </span>

              <button
                disabled={notUtilPage === notPageCount}
                onClick={() => setNotUtilPage(notUtilPage + 1)}
                className="px-3 py-1 rounded-md border bg-white disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
