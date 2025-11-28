import EntryCard from "./EntryCard";

function EntryGrid({ entries }) {
  const sortedEntries = entries
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {sortedEntries.map((entry) => (
        <EntryCard key={entry.id} entry={entry} />
      ))}
    </main>
  );
}

export default EntryGrid;
