import React from "react";

export default function ResultPanel({
  result,
  selectedLocation,
  selectedRegion,
  selectedBand,
  selectedSubband,
  hasBandSelection
}) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      {/* HEADER */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Spectrum Utilization
        </h2>

        <p className="text-gray-600 mt-1">
          {selectedLocation && (
            <span className="font-medium">{selectedLocation}</span>
          )}
          {selectedRegion && (
            <> → <span className="font-medium">{selectedRegion}</span></>
          )}
          {selectedBand && (
            <> → <span className="font-medium">{selectedBand}</span></>
          )}
          {selectedSubband && (
            <> → <span className="font-medium">{selectedSubband}</span></>
          )}
        </p>
      </div>

      {/* NO SELECTION */}
      {!hasBandSelection && (
        <div className="text-gray-500 italic">
          Select a band or subband from the sidebar to view details.
        </div>
      )}

      {/* NO RESULT */}
      {hasBandSelection && !result && (
        <div className="text-gray-500 italic">
          No data available for this selection.
        </div>
      )}

      {/* RESULT */}
      {result && (
        <div>
          {/* UTILIZATION */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Utilization
            </h3>
            <div className="text-4xl font-bold text-blue-600">
              {result.utilization}%
            </div>
          </div>

          {/* FREQUENCY BREAKDOWN */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* UTILIZED */}
            <div>
              <h4 className="text-md font-semibold text-green-700 mb-2">
                Utilized Frequencies
              </h4>
              {result.frequencies.utilized.length === 0 ? (
                <p className="text-gray-500 italic">None</p>
              ) : (
                <ul className="space-y-1">
                  {result.frequencies.utilized.map((u, i) => (
                    <li
                      key={i}
                      className="bg-green-50 border border-green-200 rounded px-3 py-1 text-green-800"
                    >
                      {u}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* NOT UTILIZED */}
            <div>
              <h4 className="text-md font-semibold text-red-700 mb-2">
                Not Utilized Frequencies
              </h4>
              {result.frequencies.notutilized.length === 0 ? (
                <p className="text-gray-500 italic">None</p>
              ) : (
                <ul className="space-y-1">
                  {result.frequencies.notutilized.map((n, i) => (
                    <li
                      key={i}
                      className="bg-red-50 border border-red-200 rounded px-3 py-1 text-red-800"
                    >
                      {n}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
