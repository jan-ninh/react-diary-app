import cyberAgent from "../assets/cyber-agent-02.png";

function LogDetails({ entry, onClose }) {
  if (!entry) return null;

  return (
    <dialog className="modal modal-open items-center">
      <div className="modal-box /* nicht höher als 90% der Bildschirmhöhe */ /* Inhalt scrollt, wenn zu hoch */ max-h-[90vh] max-w-6xl overflow-y-auto border border-cyan-400/40 bg-slate-950/95 p-0 shadow-[0_0_60px_rgba(56,189,248,0.6)]">
        <div className="grid md:grid-cols-[1.7fr_0.9fr]">
          {/* LEFT: Entry Content */}
          <div className="relative bg-slate-950/95 px-6 pt-7 pb-6 md:px-8 md:pb-8">
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
                <img
                  src={entry.imageUrl}
                  alt={entry.title}
                  className="h-72 w-full object-cover md:h-80 lg:h-96"
                />
              </div>
            )}

            <p className="font-oxanium text-sm leading-relaxed whitespace-pre-line text-slate-100">
              {entry.content}
            </p>

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

          {/* RIGHT: Protagonist – schmalere Spalte, links/rechts gecropped */}
          <div className="relative hidden overflow-hidden bg-gradient-to-tr from-yellow-300/85 via-amber-300/75 to-fuchsia-500/80 md:block">
            {/* dunkler Overlay */}
            <div className="absolute inset-0 bg-slate-950/90 mix-blend-multiply" />

            {/* Neon-Glows */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.85),transparent_40%),radial-gradient(circle_at_100%_100%,rgba(236,72,153,0.95),transparent_55%)] opacity-80" />

            {/* Protagonistin – 120% Breite, -10% nach links geschoben → ~10% links/rechts abgeschnitten */}
            <img
              src={cyberAgent}
              alt="Cyber operative"
              className="pointer-events-none relative z-10 -ml-[10%] w-[120%] max-w-none object-cover opacity-85 mix-blend-screen"
            />

            {/* Text-Layer unten rechts */}
            <div className="absolute right-4 bottom-4 left-4 z-20 text-right">
              <p className="font-rajdhani text-[0.6rem] tracking-[0.35em] text-slate-900/80 uppercase">
                CYBERNODE 2077
              </p>
              <p className="font-rajdhani text-xs text-slate-900 uppercase">
                Log Detail View
              </p>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default LogDetails;
