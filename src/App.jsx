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

  return (
    <div className="bg-base-200 min-h-screen p-6">
      <Header onOpenModal={() => setIsAddModalOpen(true)} />

      {isAddModalOpen && (
        <AddEntryModal
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleSaveEntry}
        />
      )}

      <EntryGrid entries={entries} />
    </div>
  );
}

export default App;
