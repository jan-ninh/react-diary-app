import { useEffect, useState } from "react";

import AddEntryModal from "./components/AddEntryModal";
import EntryGrid from "./components/EntryGrid";
// App.jsx
import Header from "./components/Header";

function App() {
  const [entries, setEntries] = useState(() => {
    const stored = localStorage.getItem("diaryEntries");
    if (!stored) return [];
    try {
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error("Failed to parse diary entries from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
  }, [entries]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddEntry = (formData) => {
    const existsForDay = entries.some((entry) => entry.date === formData.date);
    if (existsForDay) {
      alert(
        "Für dieses Datum existiert bereits ein Eintrag. 🎫 Bitte morgen wieder schreiben.",
      );
      return false;
    }

    if (
      !formData.title.trim() ||
      !formData.date.trim() ||
      !formData.imageUrl.trim() ||
      !formData.content.trim()
    ) {
      alert("Bitte alle Felder ausfüllen.");
      return false;
    }

    const newEntry = {
      id: crypto.randomUUID(),
      ...formData,
    };

    setEntries((prev) => [...prev, newEntry]);
    return true;
  };

  return (
    <div className="bg-base-200 min-h-screen p-6">
      <Header onOpenModal={() => setIsAddModalOpen(true)} />

      {isAddModalOpen && (
        <AddEntryModal
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleAddEntry}
        />
      )}

      <EntryGrid entries={entries} />
    </div>
  );
}

export default App;
