function LogCard({ entry, onClick }) {
  return (
    <article
      className="group overflow-hidden rounded-tl-4xl rounded-br-2xl border border-cyan-400/10 bg-slate-900/40 shadow-xl transition hover:border-cyan-400/60 hover:shadow-cyan-500/30"
      onClick={onClick}
    >
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
