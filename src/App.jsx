import { useState } from "react";

import AddEntryModal from "./components/AddEntryModal";
import EntryDetailModal from "./components/EntryDetail";
import EntryGrid from "./components/EntryGrid";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { createHandleSaveEntry } from "./functions/createHandleSaveEntry";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  // 1) Persistent Entries
  const [entries, setEntries] = useLocalStorage(); // <-- Custom Hook for Load/Save

  // 2) UI-State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // 3) Form
  const handleSaveEntry = createHandleSaveEntry(entries, setEntries);

  // Delete All
  const handleDeleteAll = () => {
    setEntries([]); // UI leeren
    localStorage.removeItem("diaryEntries"); // Key löschen
  };

  // handle Modal
  const handleOpenModal = () => setIsAddModalOpen(true);
  const handleCloseModal = () => setIsAddModalOpen(false);

  // Selected Entry
  const [selectedEntry, setSelectedEntry] = useState(null);
  const handleCloseSelectedEntry = () => setSelectedEntry(null);

  return (
    <div className="aurora-bg">
      <div className="aurora-content flex min-h-screen flex-col bg-slate-950/70 p-6 text-slate-100 backdrop-blur-md">
        <div className="flex justify-between">
          <Header />
          <Navigation
            onOpenModal={handleOpenModal}
            onDeleteAll={handleDeleteAll}
          />
        </div>
        {isAddModalOpen && (
          <AddEntryModal
            onClose={handleCloseModal}
            onSave={handleSaveEntry}
            entries={entries}
          />
        )}

        <main className="flex-1 px-4 py-6">
          <EntryGrid entries={entries} onEntryClick={setSelectedEntry} />
          {selectedEntry && (
            <EntryDetailModal
              entry={selectedEntry}
              onClose={handleCloseSelectedEntry}
            />
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
