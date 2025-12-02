import React from "react";

const Buttons = ({ onDeleteAll, onOpenModal }) => {
  return (
    <div className="flex gap-3">
      {/* Button: New Log */}
      <button
        className="btn btn-primary font-audiowide relative bg-pink-500/90 px-6 font-bold uppercase shadow-[0_0_20px_rgba(236,72,153,0.55)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/80 hover:bg-pink-400 hover:text-cyan-50 hover:shadow-[0_0_35px_rgba(34,211,238,0.85),0_0_60px_rgba(236,72,153,0.75)]"
        onClick={onOpenModal}
      >
        +New Log
      </button>

      {/* Button: Delete All */}
      <button
        className="btn btn-primary font-audiowide relative bg-pink-500/90 px-6 font-bold uppercase shadow-[0_0_20px_rgba(236,72,153,0.55)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/80 hover:bg-pink-400 hover:text-cyan-50 hover:shadow-[0_0_35px_rgba(34,211,238,0.85),0_0_60px_rgba(236,72,153,0.75)]"
        onClick={onDeleteAll}
      >
        Delete All
      </button>
    </div>
  );
};

export default Buttons;
