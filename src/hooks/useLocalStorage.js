// Custom Hook returned kein JSX - sondern Daten und Funktionen (State, Handler)
import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "diaryLogs";

//-----------------------------------------------------------------
// 1. Load Journal (1x lazy initialization)
//-----------------------------------------------------------------
export function useLocalStorage() {
  const [allEntries, setAllEntries] = useState(() => {
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

  //-----------------------------------------------------------------
  // 2. Save Journal (everytime on change)
  //-----------------------------------------------------------------
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allEntries));
    } catch (error) {
      console.error("Failed to save diaryEntries to localStorage:", error);
    }
  }, [allEntries]);

  return [allEntries, setAllEntries];
}
