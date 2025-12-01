function Header() {
  return (
    <header className="mb-2 flex items-center justify-between px-2 pt-1">
      <h1 className="font-audiowide lg:text-4.5xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 bg-clip-text text-4xl font-extrabold tracking-[0.10em] text-transparent uppercase italic drop-shadow-[0_0_12px_rgba(56,189,248,0.6)] md:text-5xl">
        <span className="block">Cybernode 2077</span>
        <span className="mt-2 block text-3xl md:text-3xl">
          {" "}
          &nbsp;{">>>"} Data Log System
        </span>
      </h1>
    </header>
  );
}

export default Header;
