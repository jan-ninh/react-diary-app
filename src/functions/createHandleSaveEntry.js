export function createHandleSaveEntry(entries, setEntries) {
  return function handleSaveEntry(formData) {
    // const existsForDay = entries.some((entry) => entry.date === formData.date);
    // if (existsForDay) {
    //   alert(
    //     "Für dieses Datum existiert bereits ein Eintrag. 🎫 Bitte morgen wieder schreiben.",
    //   );
    //   return false;
    // }

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
}
