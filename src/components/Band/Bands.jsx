import React from 'react';
import Nav from './Nav';
import SpectrumExplorer from "./SpectrumExplorer/SpectrumExplorer";
import Carousel from "../Carousel/Carousel";
import Footer from './Footer';

export default function Bands() {
  return (
    <div>
      <Nav />

      <div className="px-4 py-6">
        <Carousel />
      </div>

      <SpectrumExplorer />

      <Footer />
    </div>
  );
}
