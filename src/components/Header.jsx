function Header({ onOpenModal }) {
  return (
    <header className="mb-6 flex items-center justify-between">
      <h1 className="text-3xl font-bold">Personal Diary</h1>
      <button className="btn btn-primary" onClick={onOpenModal}>
        Add Entry
      </button>
    </header>
  );
}

export default Header;
