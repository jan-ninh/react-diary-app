import { useState } from "react";

import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LogCollection from "./components/LogCollection";
import ModalDeleteAll from "./components/ModalDeleteAll";
import ModalLogDetails from "./components/ModalLogDetails";
import ModalNewLog from "./components/ModalNewLog";
// import Test from "./components/Test";
import clearLocalStorage from "./functions/clearLocalStorage";
import createHandleDeleteLog from "./functions/createHandleDeleteLog";
import createHandleSaveNewLog from "./functions/createHandleSaveNewLog";
import { useLocalStorage } from "./hooks/useLocalStorage";
import usePreloadAllImages from "./hooks/usePreloadAllImages";

//=====================================================================
//=====> APP
//=====================================================================
function App() {
  // 0) PRELOAD Images
  usePreloadAllImages();

  // 1) All Logs
  const [allLogs, setAllLogs] = useLocalStorage(); // <-- Custom Hook for Load/Save
  const isDeleteDisabled = allLogs.length === 0;

  // 2) Create Logs
  const [isNewLogOpen, setIsNewLogOpen] = useState(false);
  const handleOpenNewLog = () => setIsNewLogOpen(true);
  const handleCloseNewLog = () => setIsNewLogOpen(false);
  const handleSaveNewLog = createHandleSaveNewLog(allLogs, setAllLogs);

  // 3) Select Log + Details Modal
  const [logSelected, setLogSelected] = useState(null);
  const [isLogDetailsOpen, setIsLogDetailsOpen] = useState(false);

  const handleOpenLogDetails = (entry) => {
    setLogSelected(entry);
    setIsLogDetailsOpen(true);
  };

  const handleCloseLogDetails = () => {
    setIsLogDetailsOpen(false);
  };

  // 4) Delete Logs
  const [isDeleteAllOpen, setIsDeleteAllOpen] = useState(false);
  const [isSystemWiping, setIsSystemWiping] = useState(false);

  const handleDeleteLog = createHandleDeleteLog(
    setAllLogs,
    setLogSelected,
    setIsLogDetailsOpen,
  );

  const handleDeleteAll = () => {
    if (allLogs.length === 0) return;
    setIsDeleteAllOpen(true);
  };

  const handleCancelDeleteAll = () => setIsDeleteAllOpen(false);

  const handleCommitDeleteAll = () => {
    // Modal schließen
    setIsDeleteAllOpen(false);

    if (allLogs.length === 0) return;

    // 1) Cyber-Wipe starten
    setIsSystemWiping(true);

    // 2) Während der Screen "tot" ist: Daten wirklich löschen
    window.setTimeout(() => {
      clearLocalStorage(setAllLogs);
      setLogSelected(null);
      setIsLogDetailsOpen(false);
    }, 260); // Moment, wo der Flash schon voll da ist

    // 3) Nach Ende der Animation: Overlay entfernen
    window.setTimeout(() => {
      setIsSystemWiping(false);
    }, 1150); // muss mit CSS-Dauer matchen
  };

  //=====================================================================
  //=====> RETURN
  //=====================================================================
  return (
    <div className="aurora-bg">
      <div className="aurora-content flex min-h-screen flex-col bg-slate-950/70 text-slate-100 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-6 py-6">
          {/* HEADER + BUTTONS */}
          <div className="flex items-center justify-between gap-6">
            <Header isSystemWiping={isSystemWiping} />

            <Buttons
              onOpenModal={handleOpenNewLog}
              onDeleteAll={handleDeleteAll}
              isDeleteDisabled={isDeleteDisabled}
            />
          </div>

          {/* <Test /> */}

          {/* MAIN */}
          <main className="flex-1">
            {/* 1) All Logs */}
            <LogCollection
              entries={allLogs}
              onEntryClick={handleOpenLogDetails}
              onDeleteEntry={handleDeleteLog}
            />

            {/* 2) Create Logs */}
            {isNewLogOpen && (
              <ModalNewLog
                onClose={handleCloseNewLog}
                onSave={handleSaveNewLog}
                entries={allLogs}
              />
            )}

            {/* 3) Select Log */}
            <ModalLogDetails
              isOpen={isLogDetailsOpen}
              entry={logSelected}
              onClose={handleCloseLogDetails}
            />

            {/* 4) Delete All */}
            <ModalDeleteAll
              isOpen={isDeleteAllOpen}
              onCancel={handleCancelDeleteAll}
              onCommit={handleCommitDeleteAll}
            />
          </main>

          <Footer />
        </div>

        {/* SYSTEM WIPE OVERLAY */}
        {isSystemWiping && <div className="cyber-wipe-overlay" />}
      </div>
    </div>
  );
}

export default App;
