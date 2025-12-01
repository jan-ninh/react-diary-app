function EntryDetail({ entry, onClose }) {
  if (!entry) return null; // Safety: nichts rendern, wenn kein Eintrag

  return (
    <dialog className="modal modal-open">
      <div className="modal-box bg-slate-900 text-slate-100">
        <h2 className="mb-2 text-2xl font-bold">{entry.title}</h2>
        <p className="mb-4 text-xs opacity-70">{entry.date}</p>

        <img
          src={entry.imageUrl}
          alt={entry.title}
          className="mb-4 w-full rounded-xl"
        />

        <p className="whitespace-pre-line">{entry.content}</p>

        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default EntryDetail;
