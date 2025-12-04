const FOOTER_TEXT = "© 2025 Jan Ninh • Data Log System";

const Footer = ({ isSystemWiping }) => {
  return (
    <footer className="mt-6 flex justify-center border-t border-slate-800 pt-4">
      <p
        className={
          "font-audiowide bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 bg-clip-text text-center text-[11px] font-extrabold tracking-[0.08em] text-transparent uppercase italic drop-shadow-[0_0_12px_rgba(56,189,248,0.6)] sm:text-xs" +
          (isSystemWiping ? " footer-wipe" : "")
        }
      >
        {/* Screenreader-Variante */}
        <span className="sr-only">{FOOTER_TEXT}</span>

        {/* Sichtbare, flackernde Buchstaben */}
        <span aria-hidden="true" className="inline-flex gap-[0.04em]">
          {FOOTER_TEXT.split("").map((char, index) => (
            <span key={index} className="letter-flicker">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </p>
    </footer>
  );
};

export default Footer;
