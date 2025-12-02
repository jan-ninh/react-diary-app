import React from "react";

const SENTENCE_POOL = [
  "Oof… another long night in Metropolis. Let's log this before I crash.",
  "New job, new scars, new data log. Let's make it worth it.",
  "Streets are still buzzing. If I don't write this down, I won't believe it tomorrow.",
  "Neon's still burning in my eyes. Time to dump the memories into the grid.",
  "Just synced my cyberware. Now it's your turn, Data Log.",
  "Another contract done. If you're reading this, I survived… again.",
  "Metropolis tried to chew me up tonight. I took notes instead.",
  "Fresh bruises, fresh intel. Logging it before the painkillers kick in.",
  "Night shift in the Neon District. Let's freeze this moment in code.",
  "My visor's low on power, my brain even more. Data Log, take over.",
  "Another glitch in the system, another story for the archive.",
  "The city whispered secrets tonight. I'm pinning them right here.",
  "Rain, neon, gunpowder… same playlist, new chapter.",
  "I don't trust my memory — that's what this log is for.",
  "Pulse still racing, hands still steady. Good time for Data Log.",
  "Mission cleared. Emotions? Unclear. Data first, feelings later.",
  "If someone finds this log, they'll know I fought back.",
  "Neon haze outside, clarity inside this log. Let's begin.",
  "Another night, another timeline branch. This is the one I chose.",
  "Systems stable, heartbeat high. Opening a fresh entry before the sirens start again.",
];

const getRandomSentence = () => {
  const index = Math.floor(Math.random() * SENTENCE_POOL.length);
  return SENTENCE_POOL[index];
};

export default getRandomSentence;
