import { useState } from "react";

// src/App.jsx
import AddEntryModal from "./components/AddEntryModal";
import EntryGrid from "./components/EntryGrid";
import Header from "./components/Header";
import { createHandleSaveEntry } from "./functions/createHandleSaveEntry";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  // 1) Persistent Entries
  const [entries, setEntries] = useLocalStorage(); // <-- Custom Hook for Load/Save

  // 2) UI-State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // 3) Form
  const handleSaveEntry = createHandleSaveEntry(entries, setEntries);

  const handleDeleteAll = () => {
    setEntries([]); // UI leeren
    localStorage.removeItem("diaryEntries"); // nur dein Key löschen
  };

  return (
    <div className="aurora-bg">
      <div className="aurora-content min-h-screen bg-slate-950/70 p-6 text-slate-100 backdrop-blur-md">
        <Header
          onOpenModal={() => setIsAddModalOpen(true)}
          onDeleteAll={handleDeleteAll}
        />
        {isAddModalOpen && (
          <AddEntryModal
            onClose={() => setIsAddModalOpen(false)}
            onSave={handleSaveEntry}
          />
        )}
        <EntryGrid entries={entries} />
      </div>
    </div>
  );
}

export default App;
