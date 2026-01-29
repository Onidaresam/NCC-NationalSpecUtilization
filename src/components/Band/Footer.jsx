import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-10 sticky bottom-0">
      
      {/* Gradient Accent Bar */}
      <div className="w-full h-1 bg-gradient-to-r from-[#4F00B6] to-[#8E2DE2]" />

      {/* MOBILE */}
      <div className="lg:hidden flex flex-col px-6 py-4 space-y-2 text-center items-center">
        
        <h2 className="text-xl font-extrabold bg-gradient-to-r from-[#4F00B6] to-[#8E2DE2] bg-clip-text text-transparent">
          NationalSpectrumView
        </h2>

        <p className="text-gray-600 text-sm">
          Copyright 2026. The NCC/NRSS Research Team.
        </p>

        <p className="text-gray-500 text-xs">
          Created by the NRSS Research Team.
        </p>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:flex flex-col justify-center items-center px-[80px] py-6 text-center space-y-1">
        
        <h2 className="text-2xl font-extrabold bg-gradient-to-r from-[#4F00B6] to-[#8E2DE2] bg-clip-text text-transparent">
          NationalSpectrumView
        </h2>

        <p className="text-gray-600 text-sm">
          Copyright 2026. The NCC/NRSS Research Team.
        </p>

        <p className="text-gray-500 text-xs">
          Created by the NRSS Research Team.
        </p>

      </div>
    </footer>
  );
}
