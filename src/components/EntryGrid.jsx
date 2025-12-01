import EmptyState from "./EmptyState";
import EntryCard from "./EntryCard";

function EntryGrid({ entries, onEntryClick }) {
  const sortedEntries = entries
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  if (sortedEntries.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-1 items-center justify-center">
        <EmptyState />
      </div>
    );
  }

  return (
    <div className="grid flex-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {sortedEntries.map((entry) => (
        <EntryCard
          key={entry.id}
          entry={entry}
          onClick={() => onEntryClick(entry)}
        />
      ))}
    </div>
  );
}

export default EntryGrid;
