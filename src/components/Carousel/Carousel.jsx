import { useState, useEffect } from "react";

export default function Carousel() {
  const images = [
    "/slide1.jpg",
    "/slide2.jpg",
    "/slide3.jpg"
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div
      className="
        relative w-full 
        h-48 
        sm:h-64 
        md:h-80 
        lg:h-[450px] 
        xl:h-[550px] 
        overflow-hidden 
        rounded-xl 
        shadow-md
      "
    >
      {/* Fade transition */}
      <img
        key={index} 
        src={images[index]}
        alt="carousel"
        className="
          w-full h-full object-cover 
          transition-opacity duration-700 
          opacity-100
        "
      />

      {/* Left button */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full"
      >
        ‹
      </button>

      {/* Right button */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full"
      >
        ›
      </button>
    </div>
  );
}
