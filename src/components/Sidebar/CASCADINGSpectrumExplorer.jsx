import React, { useState, useEffect } from "react";
import BandsData from "../../../Data/Bands/data";

import CascadingSidebar from "../Sidebar/CascadingSidebar";
import ResultPanel from "./ResultPanel";

export default function SpectrumExplorer() {
  const normalize = (str) => (str ? str.replace(/\s+/g, "") : "");

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedBand, setSelectedBand] = useState(null);
  const [selectedSubband, setSelectedSubband] = useState(null);

  const [result, setResult] = useState(null);

  // Reset when location changes
  useEffect(() => {
    setSelectedRegion(null);
    setSelectedBand(null);
    setSelectedSubband(null);
    setResult(null);
  }, [selectedLocation]);

  // Reset when region changes
  useEffect(() => {
    setSelectedBand(null);
    setSelectedSubband(null);
    setResult(null);
  }, [selectedRegion]);

  // Reset when band changes
  useEffect(() => {
    setSelectedSubband(null);
    setResult(null);
  }, [selectedBand]);

  // Compute result
  useEffect(() => {
    if (!selectedLocation) return;

    const locationData = BandsData.find(
      (loc) => loc.location === selectedLocation
    );
    if (!locationData) return;

    let bandObj = null;

    if (selectedRegion) {
      const regionObj = locationData.regions?.find(
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

    if (!bandObj) return;

    if (!bandObj.subbands) {
      setResult(bandObj.result);
      return;
    }

    if (selectedSubband) {
      const subbandObj = bandObj.subbands.find(
        (sb) => normalize(sb.range) === normalize(selectedSubband)
      );
      setResult(subbandObj?.result || null);
    }
  }, [selectedLocation, selectedRegion, selectedBand, selectedSubband]);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gradient-to-br from-[#F3E8FF] via-[#FFFFFF] to-[#E0F2FE]">
      
      {/* NEW CASCADING SIDEBAR */}
      <CascadingSidebar
        onSelectLocation={setSelectedLocation}
        onSelectRegion={setSelectedRegion}
        onSelectBand={setSelectedBand}
        onSelectSubband={setSelectedSubband}
      />

      {/* RESULT PANEL */}
      <div className="flex-1 overflow-y-auto p-6">
        <ResultPanel
          result={result}
          selectedLocation={selectedLocation}
          selectedRegion={selectedRegion}
          selectedBand={selectedBand}
          selectedSubband={selectedSubband}
          hasBandSelection={!!selectedBand || !!selectedSubband}
        />
      </div>
    </div>
  );
}
