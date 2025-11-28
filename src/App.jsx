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

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    imageUrl: "",
    content: "",
  });

  //------------------------------------------------------------------
  //------------------------------------------------------------------
  // ===> RETURN
  //------------------------------------------------------------------
  //------------------------------------------------------------------
  return (
    <div className="bg-base-200 min-h-screen p-6">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Personal Diary</h1>
        {/* ===== Button: Add Entry  ===== */}
        <button
          className="btn btn-primary"
          onClick={() => setIsAddModalOpen(true)}
        >
          Add Entry
        </button>
      </header>

      {isAddModalOpen && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h2 className="mb-4 text-xl font-semibold">New Entry</h2>

            <form
              className="space-y-4"
              onSubmit={(event) => {
                event.preventDefault();

                // 1-Entry-per-Day-Check
                const existsForDay = entries.some(
                  (entry) => entry.date === formData.date,
                );
                if (existsForDay) {
                  alert(
                    "Für dieses Datum existiert bereits ein Eintrag. 🎫 Bitte morgen wieder schreiben.",
                  );
                  return;
                }

                // Validation: alle Felder gefüllt?
                if (
                  !formData.title.trim() ||
                  !formData.date.trim() ||
                  !formData.imageUrl.trim() ||
                  !formData.content.trim()
                ) {
                  alert("Bitte alle Felder ausfüllen.");
                  return;
                }

                const newEntry = {
                  id: crypto.randomUUID(),
                  ...formData,
                };

                handleAddEntry(newEntry);

                // Formular zurücksetzen & Modal schließen
                setFormData({
                  title: "",
                  date: "",
                  imageUrl: "",
                  content: "",
                });
                setIsAddModalOpen(false);
              }}
            >
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
              />

              <input
                type="date"
                className="input input-bordered w-full"
                value={formData.date}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, date: e.target.value }))
                }
              />

              <input
                type="url"
                className="input input-bordered w-full"
                placeholder="Image URL"
                value={formData.imageUrl}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, imageUrl: e.target.value }))
                }
              />

              <textarea
                className="textarea textarea-bordered w-full"
                rows={4}
                placeholder="What happened today?"
                value={formData.content}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, content: e.target.value }))
                }
              />

              <div className="modal-action">
                <button
                  type="button"
                  className="btn"
                  onClick={() => setIsAddModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Entry
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}

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
