function Header() {
  return (
    <header className="mb-2 flex items-center justify-between px-2 pt-1">
      <h1 className="cyber-gradient-text font-audiowide lg:text-4.5xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 bg-clip-text text-4xl font-extrabold tracking-[0.10em] text-transparent uppercase italic drop-shadow-[0_0_12px_rgba(56,189,248,0.6)] md:text-5xl">
        <span className="block leading-tight">CYBERNODE 2077</span>

        <span className="mt-1 block text-xl tracking-[0.02em] sm:text-2xl md:text-3xl">
          {">>>"} DATA LOG SYSTEM
        </span>
      </h1>
    </header>
  );
}

export default Header;
