export default function createHandleDeleteLog(setAllLogs, setLogSelected) {
  return function handleDeleteLog(id) {
    setAllLogs((prev) => prev.filter((log) => log.id !== id));
    setLogSelected((prev) => (prev && prev.id === id ? null : prev));
  };
}
