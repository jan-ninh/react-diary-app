import { getHeroImageById } from "../functions/getRandomHeroImage";

function ModalLogDetails({ isOpen, entry, onClose }) {
  const heroImage =
    entry && entry.heroImageId ? getHeroImageById(entry.heroImageId) : null;

  return (
    <dialog
      className={`cyber-modal modal ${isOpen ? "modal-open" : ""}`}
      aria-modal="true"
      role="dialog"
    >
      {/* MODAL: feste Größe, nicht vom Bild abhängig */}
      <div className="modal-box h-[80vh] max-h-[80vh] w-full max-w-5xl transform-gpu overflow-hidden border border-cyan-400/40 bg-slate-950/95 p-0 shadow-[0_0_60px_rgba(56,189,248,0.6)] will-change-[transform,opacity]">
        {/* GRID füllt die komplette Modal-Höhe */}
        <div className="grid h-full md:grid-cols-[1.7fr_1.1fr]">
          {/* LEFT: Entry Content – scrollt bei Bedarf */}
          <div className="relative flex h-full flex-col overflow-y-auto bg-slate-950/95 px-6 pt-7 pb-6 md:px-8 md:pb-8">
            {entry && (
              <>
                <header className="mb-4">
                  <p className="font-rajdhani text-xs tracking-[0.25em] text-slate-400 uppercase">
                    {entry.date}
                  </p>
                  <h2 className="font-rajdhani mt-1 text-3xl font-semibold tracking-[0.15em] text-cyan-100 uppercase">
                    {entry.title}
                  </h2>
                </header>

                {entry.imageUrl && (
                  <div className="mb-6 overflow-hidden rounded-2xl border border-cyan-500/30 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
                    {/* Fester Bild-Platzhalter, Bild passt sich an */}
                    <div className="relative aspect-[16/9] w-full">
                      <img
                        src={entry.imageUrl}
                        alt={entry.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  </div>
                )}

                <p className="font-oxanium text-sm leading-relaxed whitespace-pre-line text-slate-100">
                  {entry.content}
                </p>
              </>
            )}

            {/* Close-Button bleibt unten, Inhalt darüber scrollt */}
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="btn border border-slate-600/80 bg-slate-900/80 text-slate-200 hover:border-cyan-400/50 hover:text-cyan-200"
              >
                Close
              </button>
            </div>
          </div>

          {/* RIGHT: Protagonist – fester Bereich, füllt Modal-Höhe */}
          <div className="relative hidden h-full overflow-hidden bg-gradient-to-tr from-yellow-300/85 via-amber-300/75 to-fuchsia-500/80 md:block">
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-slate-950/90" />

            {/* Neon-Glow Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.85),transparent_40%),radial-gradient(circle_at_100%_100%,rgba(236,72,153,0.95),transparent_55%)] opacity-80 select-none" />

            {/* HERO IMAGE füllt den kompletten rechten Bereich */}
            {heroImage && (
              <div className="absolute inset-0">
                <img
                  src={heroImage.src}
                  alt="Cyber operative"
                  className="h-full w-full object-cover opacity-85"
                />
              </div>
            )}

            {/* Text-Label unten rechts */}
            <div className="pointer-events-none absolute right-4 bottom-4 left-4 z-20 text-right select-none">
              <p className="font-rajdhani text-[0.6rem] tracking-[0.35em] text-slate-900/80 uppercase">
                CYBERNODE 2077
              </p>
              <p className="font-rajdhani pointer-events-none text-xs text-slate-900 uppercase select-none">
                Log Detail View
              </p>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default ModalLogDetails;
