function Header({ onOpenModal }) {
  return (
    <header className="mb-6 flex items-center justify-between">
      <h1 className="font-orbitron lg:text-4.5xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 bg-clip-text text-4xl font-extrabold tracking-[0.10em] text-transparent uppercase italic drop-shadow-[0_0_12px_rgba(56,189,248,0.6)] md:text-5xl">
        Cyberpunk 2077 Diary
      </h1>
      <button className="btn btn-primary" onClick={onOpenModal}>
        Add Entry
      </button>
      <button className="btn btn-primary" onClick={() => localStorage.clear()}>
        Delete All
      </button>
    </header>
  );
}

export default Header;
