import React from "react";

const Navigation = ({ onDeleteAll, onOpenModal }) => {
  return (
    <div className="flex gap-3">
      {/* Button: New Log */}
      <button
        className="btn btn-primary font-audiowide font-bold uppercase"
        onClick={onOpenModal}
      >
        +New Log
      </button>

      {/* Button: Delete All */}
      <button
        className="btn btn-primary font-audiowide font-bold uppercase"
        onClick={onDeleteAll}
      >
        Delete All
      </button>
    </div>
  );
};

export default Navigation;
