const MAIN_TITLE = "CYBERNODE 2077";
const SUB_TITLE = ">>> DATA LOG SYSTEM";

function Header({ isSystemWiping, isSystemRestoring }) {
  return (
    <header className="shrink-0">
      <h1
        className={
          "cyber-gradient-text font-audiowide bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 bg-clip-text text-3xl leading-tight font-extrabold tracking-[0.10em] text-transparent uppercase italic drop-shadow-[0_0_12px_rgba(56,189,248,0.6)] sm:text-4xl md:text-5xl" +
          (isSystemWiping ? " header-wipe" : "") +
          (isSystemRestoring ? " header-restore" : "")
        }
      >
        {/* Screenreader-Text */}
        <span className="sr-only">CYBERNODE 2077 - Data Log System</span>

        {/* Haupttitel */}
        <span aria-hidden="true" className="flex gap-[0.08em]">
          {MAIN_TITLE.split("").map((char, index) => (
            <span key={index} className="letter-flicker">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>

        {/* Untertitel */}
        <span
          aria-hidden="true"
          className="mt-1 flex gap-[0.06em] text-base tracking-[0.02em] sm:text-xl md:text-2xl"
        >
          {SUB_TITLE.split("").map((char, index) => (
            <span key={index} className="letter-flicker">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </h1>
    </header>
  );
}

export default Header;
