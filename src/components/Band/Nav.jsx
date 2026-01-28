import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WaveformLogo from "../Logo/WaveformLogo";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {/* MOBILE NAV */}
      <div className="flex flex-row pt-[24px] px-[16px] md:px-[45px] md:pb-[17px] pb-[12px] lg:hidden z-[8888] sticky top-0 bg-white justify-between">
        
        {/* Logo + Title */}
        <div className="flex items-center gap-3 group cursor-pointer">
        <WaveformLogo />
         <h1 className="text-lg font-extrabold bg-gradient-to-r from-[#4F00B6] to-[#8E2DE2] bg-clip-text text-transparent tracking-wide transition-all duration-300 group-hover:tracking-widest group-hover:scale-[1.03]">
            National Spectrum Utilization Dashboard
          </h1>
        </div>

        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>

              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                <Link
                  className="underline underline-offset-8 text-[#73FF0F] font-graphik text-base font-bold leading-6"
                  to="/"
                >
                  Bands
                </Link>

                <Link
                  className="hover:underline hover:underline-offset-8 hover:text-[#73FF0F] font-graphik text-base font-bold leading-6"
                  to="/aboutus"
                >
                  Meet the Team
                </Link>
              </ul>
            </div>
          </section>
        </nav>

        <style>{`
          .hideMenuNav { display: none; }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: white;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }
        `}</style>
      </div>

      {/* DESKTOP NAV */}
      <div className="hidden z-[8888] sticky top-0 bg-white lg:flex flex-row items-center px-[80px] py-[16px] justify-between">
        
        {/* Logo + Title */}
        <div className="flex items-center gap-3 group cursor-pointer">
         <WaveformLogo />
        <h1 className="text-xl font-extrabold bg-gradient-to-r from-[#4F00B6] to-[#8E2DE2] bg-clip-text text-transparent tracking-wide transition-all duration-300 group-hover:tracking-widest group-hover:scale-[1.03]">
            National Spectrum Utilization Dashboard
          </h1>
        </div>

        <div className="flex items-center space-x-[40px]">
          <Link
            to="/"
            className="text-[#73FF0F] font-graphik text-base font-bold leading-6 px-[16px] py-[12px] rounded-lg bg-[#4F00B6]"
          >
            Bands
          </Link>

          <Link
            to="/aboutus"
            className="text-[#5F5F8C] hover:text-[#73FF0F] font-graphik text-base font-medium leading-6"
          >
            Meet the Team
          </Link>
        </div>
      </div>
    </>
  );
}
