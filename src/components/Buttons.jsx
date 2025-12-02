import React from "react";

const Buttons = ({ onDeleteAll, onOpenModal }) => {
  return (
    <div className="flex gap-3">
      {/* Button: New Log */}
      <button
        className="btn btn-primary font-audiowide bg-pink-500/90 font-bold uppercase shadow-md transition hover:border-cyan-400/60 hover:bg-pink-400 hover:shadow-cyan-500/30"
        onClick={onOpenModal}
      >
        +New Log
      </button>

      {/* Button: Delete All */}
      <button
        className="btn btn-primary font-audiowide bg-pink-500/90 font-bold uppercase shadow-md transition hover:border-cyan-400/60 hover:shadow-cyan-500/30"
        onClick={onDeleteAll}
      >
        Delete All
      </button>
    </div>
  );
};

export default Buttons;
