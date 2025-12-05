import { useState } from "react";

import cyberAgent from "../assets/cyber-agent-01.webp";
import { getRandomHeroImage } from "../functions/getRandomHeroImage";
import getRandomImageUrl from "../functions/getRandomImageUrl";
import getRandomSentence from "../functions/getRandomSentence";
import getRandomTitle from "../functions/getRandomTitle";
import getUniqueSuggestionDate from "../functions/getUniqueSuggestionDate";

// !Funktion, kein Objekt
const createInitialFormData = (entries) => ({
  title: getRandomTitle(),
  date: getUniqueSuggestionDate(entries),
  imageUrl: getRandomImageUrl(),
  content: getRandomSentence(),
});

function ModalNewLog({ onClose, onSave, entries }) {
  const [formData, setFormData] = useState(() =>
    createInitialFormData(entries),
  );

  const hasDateConflict =
    !!formData.date && entries.some((entry) => entry.date === formData.date);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Random Hero-Image
    const heroImage = getRandomHeroImage();
    const success = onSave({
      ...formData,
      heroImageId: heroImage.id,
    });

    if (!success) return;

    setFormData(createInitialFormData(entries));
    onClose();
  };

  const handleCancel = () => {
    setFormData(createInitialFormData(entries));
    onClose();
  };

  return (
    <dialog className="modal modal-open items-center backdrop:bg-slate-950/70 backdrop:backdrop-blur-lg">
      <div className="modal-box max-w-4xl translate-y-[-4vh] overflow-hidden border border-cyan-400/40 bg-slate-950/95 p-0 shadow-[0_0_60px_rgba(56,189,248,0.6)]">
        <div className="grid md:grid-cols-[1.05fr_1.1fr]">
          {/* LEFT: Charakter + gelber Gradient */}
          <div className="relative overflow-hidden bg-gradient-to-br from-yellow-300/80 via-amber-300/70 to-fuchsia-500/70">
            {/* dunkler Overlay für mehr Kontrast */}
            <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply" />

            {/* neon glows */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.8),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(236,72,153,0.9),transparent_55%)] opacity-80" />

            {/* Protagonistin */}
            <img
              src={cyberAgent}
              alt="Cyber operative"
              className="pointer-events-none relative z-10 h-full w-full object-cover opacity-80 mix-blend-screen select-none"
            />

            {/* Text-Layer unten links */}
            <div className="absolute right-4 bottom-4 left-4 z-20">
              <p className="font-rajdhani pointer-events-none text-xs tracking-[0.35em] text-slate-900/80 select-none">
                CYBERNODE 2077
              </p>
              <p className="font-rajdhani pointer-events-none text-sm text-slate-900 uppercase select-none">
                New Data Log Entry
              </p>
            </div>
          </div>

          {/* RIGHT: Formular */}
          <div className="relative bg-slate-950/95 p-6 md:p-8">
            <header className="mb-6 flex items-center justify-between">
              <h2 className="font-rajdhani flex justify-center text-3xl font-semibold tracking-[0.15em] text-cyan-100 uppercase">
                NEW ENTRY
              </h2>
              <span className="rounded-full border border-cyan-400/40 bg-slate-900/80 px-3 py-0.5 text-[0.65rem] tracking-[0.2em] text-slate-400 uppercase">
                Data Log Input
              </span>
            </header>

            <form className="font-oxanium space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                className="input input-bordered w-full border-cyan-500/30 bg-slate-900/70 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/60 focus:outline-none"
                placeholder="Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
              />
              {hasDateConflict && (
                <p className="mt-1 text-xs text-amber-300">
                  Warning:&nbsp;There&apos;s already a log with this date. Check
                  back tomorrow!
                </p>
              )}

              <input
                type="date"
                className="input input-bordered w-full border-cyan-500/30 bg-slate-900/70 text-slate-100 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/60 focus:outline-none"
                value={formData.date}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, date: e.target.value }))
                }
              />

              <input
                type="url"
                className="input input-bordered w-full border-cyan-500/30 bg-slate-900/70 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/60 focus:outline-none"
                placeholder="Image URL"
                value={formData.imageUrl}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, imageUrl: e.target.value }))
                }
              />

              <textarea
                className="textarea textarea-bordered w-full border-cyan-500/30 bg-slate-900/70 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/60 focus:outline-none"
                rows={4}
                placeholder="What happened today?"
                value={formData.content}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, content: e.target.value }))
                }
              />

              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  className="btn border border-slate-600/80 bg-slate-900/80 text-slate-200 hover:border-cyan-400/50 hover:text-cyan-200"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={hasDateConflict}
                  className={`btn font-rajdhani border-none px-6 text-sm ... ${
                    hasDateConflict
                      ? "cursor-not-allowed bg-pink-500/40 opacity-40 hover:bg-pink-500/40 hover:shadow-none"
                      : "bg-pink-500/90 hover:bg-pink-400 hover:shadow-[0_0_40px_rgba(56,189,248,0.9)]"
                  }`}
                >
                  Save Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default ModalNewLog;
