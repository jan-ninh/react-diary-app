import React, { useEffect, useState } from "react";

const PageEmptyState = () => {
  const DISPLAY_MESSAGE_01 = "> Initializing Cybernode...";
  const DISPLAY_MESSAGE_02 = "> AWAITING NEW DATA...";

  const [isVisible, setIsVisible] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(DISPLAY_MESSAGE_01);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setIsVisible(true), 900);
    const textTimer = setTimeout(() => {
      setDisplayMessage(DISPLAY_MESSAGE_02);
    }, 8200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(textTimer);
    };
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
        }} /* component_exchange */
      >
        automation
      </span>

      <p className="font-audiowide animate-cyber-pulse text-center text-sm font-semibold whitespace-pre-line text-gray-300 uppercase italic">
        {displayMessage}
      </p>
    </div>
  );
};

export default PageEmptyState;
