import { useState } from "react";

import AddNewLog from "./components/AddNewLog";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LogCollection from "./components/LogCollection";
import LogDetails from "./components/LogDetails";
import { createHandleSaveEntry as createHandleSaveLog } from "./functions/createHandleSaveEntry";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  // 1) All Data Logs
  const [allLogs, setAllLogs] = useLocalStorage(); // <-- Custom Hook for Load/Save

  // 2) Create New Log
  const [isNewLogOpen, setIsNewLogOpen] = useState(false);
  const handleOpenNewLog = () => setIsNewLogOpen(true);
  const handleCloseNewLog = () => setIsNewLogOpen(false);
  const handleSaveLog = createHandleSaveLog(allLogs, setAllLogs);

  // 3) Delete All Logs
  const handleDeleteAll = () => {
    setAllLogs([]); // UI leeren
    localStorage.removeItem("diaryEntries"); // Key löschen
  };

  // 4) Select Log
  const [logSelected, setLogSelected] = useState(null);
  const handleCloseLogSelected = () => setLogSelected(null);

  return (
    <div className="aurora-bg">
      <div className="aurora-content flex min-h-screen flex-col bg-slate-950/70 p-6 text-slate-100 backdrop-blur-md">
        <div className="flex justify-between">
          <Header />
          <Buttons
            onOpenModal={handleOpenNewLog}
            onDeleteAll={handleDeleteAll}
          />
        </div>

        <main className="flex-1 px-4 py-6">
          {/* 1) All Data Logs */}
          <LogCollection entries={allLogs} onEntryClick={setLogSelected} />

          {/* 2) Create New Log */}
          {isNewLogOpen && (
            <AddNewLog
              onClose={handleCloseNewLog}
              onSave={handleSaveLog}
              entries={allLogs}
            />
          )}

          {/* 3) Select Log */}
          {logSelected && (
            <LogDetails entry={logSelected} onClose={handleCloseLogSelected} />
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
