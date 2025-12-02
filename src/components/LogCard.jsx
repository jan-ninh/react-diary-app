function LogCard({ entry, onClick, onDelete }) {
  return (
    <article
      className="group relative overflow-hidden rounded-tl-4xl rounded-br-2xl border border-cyan-400/10 bg-slate-900/40 shadow-xl transition hover:border-cyan-400/60 hover:shadow-cyan-500/30"
      onClick={onClick}
    >
      {/* Delete-Button */}
      <button
        type="button"
        className="absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950/80 bg-transparent text-slate-400 opacity-0 transition group-hover:opacity-100 hover:bg-pink-500/80 hover:text-slate-50"
        onClick={(event) => {
          event.stopPropagation();
          onDelete();
        }}
        aria-label="Delete log"
      >
        <span className="material-symbols-outlined text-[18px] leading-none">
          close_small
        </span>
      </button>

      <figure className="h-40 overflow-hidden">
        <img
          src={entry.imageUrl}
          alt={entry.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </figure>

      <div className="bg-slate-900/80 px-6 py-4 backdrop-blur-md">
        <p className="font-rajdhani text-xs tracking-wide text-slate-400">
          {entry.date}
        </p>

        <h2 className="font-rajdhani mt-1 text-lg font-semibold text-cyan-100 uppercase transition group-hover:text-cyan-300">
          {entry.title}
        </h2>
      </div>
    </article>
  );
}

export default LogCard;
