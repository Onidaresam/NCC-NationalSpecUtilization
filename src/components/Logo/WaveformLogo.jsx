export default function WaveformLogo() {
  return (
    <div className="ecg-container">
      <svg
        width="170"
        height="60"
        viewBox="0 0 170 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="
          bg-gray-100 
          rounded-md 
          p-2 
          transition-transform 
          duration-300 
          group-hover:scale-110
          ecg-pulse
        "
      >
        {/* Primary heartbeat (purple) */}
        <path
          d="
            M0 30
            L20 30
            L30 10
            L40 50
            L50 30
            L70 30
            L80 5
            L90 55
            L100 30
            L130 30
            L170 30
          "
          stroke="#8E2DE2"   /* Purple */
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Secondary heartbeat (blue) */}
        <path
          d="
            M0 32
            L20 32
            L30 12
            L40 48
            L50 32
            L70 32
            L80 7
            L90 53
            L100 32
            L130 32
            L170 32
          "
          stroke="#2962FF"   /* Blue */
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
        />
      </svg>

      {/* Sharp ECG pulse animation */}
      <style>{`
        @keyframes ecgPulseSharp {
          0%   { transform: scale(1); }
          10%  { transform: scale(1.18); } /* sharp snap */
          20%  { transform: scale(0.96); } /* quick recoil */
          30%  { transform: scale(1.10); } /* secondary bump */
          40%  { transform: scale(1); }    /* settle */
          100% { transform: scale(1); }    /* rest */
        }

        .ecg-pulse {
          animation: ecgPulseSharp 1.2s infinite ease-in-out;
          transform-origin: center;
        }
      `}</style>
    </div>
  );
}
