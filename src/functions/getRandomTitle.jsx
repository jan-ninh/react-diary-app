import React from "react";

const TITLE_POOL = [
  "🌙 Just another night in the grid",
  "Giving up was never an option",
  "🌙 Neon nights, silent wars",
  "🧬 Between code and chaos",
  "🌆 Echoes of a sleepless city",
  "Data logs and battle scars",
  "🌆 Where neon meets regret",
  "Another contract, another scar",
  "🗡️ Tomorrow is not guaranteed",
  "Heart of steel, pulse of fire",
  "🌀 No rest for the wired",
  "🔋 Hope running on low battery",
  "💫 Glitches, ghosts, and second chances",
  "Built from broken code",
  "⚡ Thunder over Metropolis",
  "Standing in the crossfire again",
  "💾 Trust the data, doubt the world",
  "💉 Running on caffeine and revenge",
  "🌆 Saving fragments of a lost night",
  "🌐 Born in chaos, forged in neon",
];

const getRandomTitle = () => {
  const index = Math.floor(Math.random() * TITLE_POOL.length);
  return TITLE_POOL[index];
};

export default getRandomTitle;
