import React, { useEffect, useState } from "react";

{
  /* automation */
}
{
  /* component_exchange */
}

const PageEmptyState = ({ message = "> Initializing Cybernode..." }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex flex-col items-center gap-3 transition-opacity duration-3000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <span
        className="material-symbols-outlined thin mb-2 animate-ping animate-spin text-gray-300 [animation-duration:10s]"
        style={{
          fontSize: "90px",
          fontVariationSettings: '"FILL" 0, "wght" 100, "GRAD" 0, "opsz" 24',
        }}
      >
        automation
      </span>

      <p className="font-audiowide animate-cyber-pulse text-center text-sm font-semibold whitespace-pre-line text-gray-300 uppercase italic">
        {message}
      </p>
    </div>
  );
};

export default PageEmptyState;
