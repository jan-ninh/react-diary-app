function App() {
// State für unser Journal
const [entries, setEntries] = useState([]);

//------------------------------------------------------------------
// 1. useEffect holt Entries nur 1x aus localStorage
//------------------------------------------------------------------
useEffect(() => {
const stored = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (stored) {
      try {
        const parsedEntries = JSON.parse(stored);
        setEntries(parsedEntries);
      } catch (error) {
        console.error(
          "Could not parse diary entries from localStorage:",
          error,
        );
      }
    }

}, []); // nur 1x beim ersten Mount
