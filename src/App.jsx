import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "diaryEntries";

function App() {
  // State für unser Journal
  //------------------------------------------------------------------
  // 1. Loading entries
  //------------------------------------------------------------------
  // useState ArrowFunction (lazy initializer)
  const [entries, setEntries] = useState(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!stored) return [];

    try {
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error("Failed to parse diary entries from localStorage:", error);
      return [];
    }
  });

  //------------------------------------------------------------------
  // 2. useEffect beobachtet entries
  //------------------------------------------------------------------
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(entries));
  }, [entries]); //läuft jedes Mal, wenn entries sich ändert

  //------------------------------------------------------------------
  // 3. Add Entry
  //------------------------------------------------------------------
  const handleAddEntry = (newEntry) => {
    setEntries((prevEntries) => [...prevEntries, newEntry]);
  };

  //------------------------------------------------------------------
  //------------------------------------------------------------------
  // ===> RETURN
  //------------------------------------------------------------------
  //------------------------------------------------------------------
  return (
    <div className="bg-base-200 min-h-screen p-6">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Personal Diary</h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            // Add Entry Modal
            // z. B. setIsAddModalOpen(true)

            // Zum Testen: Dummy-Eintrag anlegen:
            const dummyEntry = {
              id: crypto.randomUUID(),
              title: "Test Entry",
              date: "2025-11-27",
              imageUrl: "https://via.placeholder.com/400x200",
              content: "This is a test entry.",
            };
            handleAddEntry(dummyEntry);
          }}
        >
          Add Entry
        </button>
      </header>

      {/* Liste der Einträge – später als eigene Komponente auslagern */}
      <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {entries
          .slice()
          .sort((a, b) => new Date(b.date) - new Date(a.date)) // neueste zuerst
          .map((entry) => (
            <article
              key={entry.id}
              className="card bg-base-100 cursor-pointer shadow-md"
            >
              <figure>
                <img src={entry.imageUrl} alt={entry.title} />
              </figure>
              <div className="card-body">
                <p className="text-sm opacity-70">{entry.date}</p>
                <h2 className="card-title">{entry.title}</h2>
                {/* Hier später: onClick → Detail-Modal */}
              </div>
            </article>
          ))}
      </main>
    </div>
  );
}

export default App;
