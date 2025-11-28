function EntryCard({ entry }) {
  return (
    <article className="card bg-base-100 cursor-pointer shadow-md">
      <figure>
        <img src={entry.imageUrl} alt={entry.title} />
      </figure>
      <div className="card-body">
        <p className="text-sm opacity-70">{entry.date}</p>
        <h2 className="card-title">{entry.title}</h2>
        {/* Platz für späteres Detail-Modal / Content-Preview */}
      </div>
    </article>
  );
}

export default EntryCard;
