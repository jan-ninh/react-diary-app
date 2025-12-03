import cyberAgent from "../assets/cyber-agent-desk-01.webp";

function DeleteAllConfirmModal({ onCancel, onCommit }) {
  return (
    <dialog className="modal modal-open items-center">
      {/* kleineres Modal */}
      <div className="modal-box max-h-[80vh] w-[80vw] max-w-3xl overflow-y-auto border border-cyan-400/40 bg-slate-950/95 p-0 shadow-[0_0_40px_rgba(56,189,248,0.6)]">
        <div className="grid md:grid-cols-[0.8fr_1.5fr]">
          {/* LEFT: Protagonistin */}
          <div className="relative hidden overflow-hidden bg-gradient-to-tr from-yellow-300/85 via-amber-300/75 to-fuchsia-500/80 md:block">
            <div className="absolute inset-0 bg-slate-950/90 mix-blend-multiply" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.85),transparent_40%),radial-gradient(circle_at_100%_100%,rgba(236,72,153,0.95),transparent_55%)] opacity-80" />

            <img
              src={cyberAgent}
              alt="Cyber operative"
              className="pointer-events-none relative z-10 -ml-[10%] w-[120%] max-w-none object-cover opacity-85 mix-blend-screen"
            />

            <div className="absolute right-4 bottom-4 left-4 z-20 text-left">
              <p className="font-rajdhani text-[0.6rem] tracking-[0.35em] text-slate-900/80 uppercase">
                CYBERNODE 2077
              </p>
              <p className="font-rajdhani text-xs text-slate-900 uppercase">
                System Override
              </p>
            </div>
          </div>

          {/* RIGHT: Inhalt */}
          <div className="relative flex flex-col bg-slate-950/95 px-6 pt-7 pb-6 md:px-8 md:pb-8">
            <header className="mb-6">
              <p className="font-rajdhani flex justify-center text-sm tracking-[0.25em] text-amber-300/80 uppercase">
                WARNING
              </p>
              <h2 className="font-rajdhani mt-1 flex justify-center text-3xl font-semibold tracking-[0.15em] text-cyan-100 uppercase">
                Terminate All Data?
              </h2>
            </header>

            {/* „Sprechblase“ – mittig zentriert */}
            <div className="mt-10 flex justify-center">
              <p className="font-rajdhani max-w-md rounded-2xl border border-cyan-400/60 bg-slate-900/90 px-10 py-1 text-center text-sm leading-relaxed text-slate-100 shadow-[0_0_35px_rgba(56,189,248,0.7)]">
                No backups. No shadows.
                <br></br>Just silence in the system...
              </p>
            </div>

            {/* Buttons – unten, zentriert */}
            <div className="mt-auto flex justify-center gap-5 pt-8">
              <button
                type="button"
                onClick={onCancel}
                className="btn border border-slate-600/80 bg-slate-900/80 px-12 text-slate-200 hover:border-cyan-400/50 hover:text-cyan-200"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={onCommit}
                className="btn mr-1 border border-rose-500/70 bg-rose-600/90 px-12 text-slate-100 hover:border-rose-400 hover:bg-rose-500"
              >
                Commit
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default DeleteAllConfirmModal;
