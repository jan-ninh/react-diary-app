import React from "react";

const getUniqueSuggestionDate = (entries = []) => {
  const usedDates = new Set(entries.map((e) => e.date));
  let offset = 0;

  while (offset < 3650) {
    const base = new Date();
    base.setDate(base.getDate() + offset);

    // ergibt "2077-12-01" usw.
    const candidate = "2077" + base.toISOString().slice(4, 10);

    if (!usedDates.has(candidate)) return candidate;
    offset++;
  }
};

export default getUniqueSuggestionDate;
