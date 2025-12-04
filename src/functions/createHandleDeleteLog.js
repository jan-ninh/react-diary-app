export default function createHandleDeleteLog(
  setAllLogs,
  setLogSelected,
  setIsLogDetailsOpen,
) {
  return function handleDeleteLog(id) {
    // 1) Log aus Collection entfernen
    setAllLogs((prev) => prev.filter((log) => log.id !== id));

    // 2) Falls der gelöschte Log aktuell im Detail-Modal angezeigt wird:
    if (setLogSelected) {
      setLogSelected((prev) => {
        if (prev && prev.id === id) {
          if (setIsLogDetailsOpen) {
            setIsLogDetailsOpen(false);
          }
          return null;
        }
        return prev;
      });
    }
  };
}
