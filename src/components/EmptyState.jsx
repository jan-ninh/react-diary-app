// EmptyState.jsx
import React from "react";

const EmptyState = ({ message = "> Initializing Cybernode..." }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <span
        className="material-symbols-outlined thin mb-2 animate-ping animate-spin text-gray-300 [animation-duration:10s]"
        style={{
          fontSize: "90px",
          fontVariationSettings: '"FILL" 0, "wght" 100, "GRAD" 0, "opsz" 24',
        }}
      >
        automation
        {/* automation */}
        {/* component_exchange */}
      </span>

      <p className="font-audiowide animate-cyber-pulse text-center text-sm font-semibold whitespace-pre-line text-gray-300 uppercase italic">
        {message}
      </p>
    </div>
  );
};

export default EmptyState;
