import React from "react";

const Buttons = ({ onDeleteAll, onOpenModal, isDeleteDisabled }) => {
  const baseButtonClasses =
    "btn btn-primary font-audiowide relative px-6 font-bold uppercase " +
    "border border-transparent " +
    "shadow-[0_0_20px_rgba(236,72,153,0.55)] " +
    "bg-pink-500/90 " +
    "transition duration-300 " +
    "hover:-translate-y-0.5 hover:border-cyan-400/80 hover:bg-pink-400 " +
    "hover:text-cyan-50 hover:shadow-[0_0_35px_rgba(34,211,238,0.85),0_0_60px_rgba(236,72,153,0.75)]";

  const deleteButtonExtra =
    " disabled:translate-y-0 " +
    " disabled:cursor-not-allowed " +
    " disabled:bg-slate-800 " +
    " disabled:text-slate-700 " +
    " disabled:border-slate-600 " +
    " disabled:shadow-[0_0_12px_rgba(15,23,42,0.9)]";

  return (
    <div className="buttons-fade-in-up flex gap-3">
      <button className={baseButtonClasses} onClick={onOpenModal}>
        +New Log
      </button>

      <button
        className={baseButtonClasses + deleteButtonExtra}
        onClick={onDeleteAll}
        disabled={isDeleteDisabled}
      >
        Delete All
      </button>
    </div>
  );
};

export default Buttons;
