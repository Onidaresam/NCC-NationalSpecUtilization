import React, { useState } from "react";
import BandsData from "../../Data/Bands/data";
import "./CascadingSidebar.css";

export default function CascadingSidebar({
  onSelectLocation,
  onSelectRegion,
  onSelectBand,
  onSelectSubband
}) {
  const [activeLocation, setActiveLocation] = useState(null);
  const [activeRegion, setActiveRegion] = useState(null);
  const [activeBand, setActiveBand] = useState(null);
  const [activeSubband, setActiveSubband] = useState(null);

  const handleLocationClick = (locId) => {
    setActiveLocation(locId === activeLocation ? null : locId);
    setActiveRegion(null);
    setActiveBand(null);
    setActiveSubband(null);
    onSelectLocation?.(locId);
  };

  const handleRegionClick = (regionName) => {
    setActiveRegion(regionName === activeRegion ? null : regionName);
    setActiveBand(null);
    setActiveSubband(null);
    onSelectRegion?.(regionName);
  };

  const handleBandClick = (bandRange) => {
    setActiveBand(bandRange === activeBand ? null : bandRange);
    setActiveSubband(null);
    onSelectBand?.(bandRange);
  };

  const handleSubbandClick = (subbandRange) => {
    setActiveSubband(subbandRange);
    onSelectSubband?.(subbandRange);
  };

  return (
    <div className="cs-sidebar">
      {/* LOCATIONS */}
      <div className="cs-column">
        {BandsData.map((loc) => (
          <button
            key={loc.id}
            className={
              "cs-item" + (activeLocation === loc.id ? " cs-item-active" : "")
            }
            onClick={() => handleLocationClick(loc.id)}
          >
            {loc.location}
          </button>
        ))}
      </div>

      {/* REGIONS */}
      <div className="cs-column">
        {activeLocation &&
          BandsData.find((l) => l.id === activeLocation)?.regions.map(
            (region) => (
              <button
                key={region.region}
                className={
                  "cs-item" +
                  (activeRegion === region.region ? " cs-item-active" : "")
                }
                onClick={() => handleRegionClick(region.region)}
              >
                {region.region}
              </button>
            )
          )}
      </div>

      {/* BANDS */}
      <div className="cs-column">
        {activeLocation &&
          activeRegion &&
          BandsData.find((l) => l.id === activeLocation)
            ?.regions.find((r) => r.region === activeRegion)
            ?.bands.map((band) => (
              <button
                key={band.range}
                className={
                  "cs-item" +
                  (activeBand === band.range ? " cs-item-active" : "")
                }
                onClick={() => handleBandClick(band.range)}
              >
                {band.range}
              </button>
            ))}
      </div>

      {/* SUBBANDS */}
      <div className="cs-column">
        {activeLocation &&
          activeRegion &&
          activeBand &&
          BandsData.find((l) => l.id === activeLocation)
            ?.regions.find((r) => r.region === activeRegion)
            ?.bands.find((b) => b.range === activeBand)
            ?.subbands?.map((sb) => (
              <button
                key={sb.range}
                className={
                  "cs-item" +
                  (activeSubband === sb.range ? " cs-item-active" : "")
                }
                onClick={() => handleSubbandClick(sb.range)}
              >
                {sb.range}
              </button>
            ))}
      </div>
    </div>
  );
}
