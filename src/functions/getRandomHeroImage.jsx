import cyberAgent10 from "../assets/cyber-agent-10.webp";
import cyberAgent11 from "../assets/cyber-agent-11.webp";
import cyberAgent12 from "../assets/cyber-agent-12.webp";
import cyberAgent13 from "../assets/cyber-agent-13.webp";
import cyberAgentAction from "../assets/cyber-agent-action.webp";
import cyberAgentHealing from "../assets/cyber-agent-healing.webp";
import cyberAgentHiding from "../assets/cyber-agent-hiding.webp";
import cyberAgentSad from "../assets/cyber-agent-sad.webp";
import cyberAgentSearching from "../assets/cyber-agent-searching.webp";
import cyberAgentShooting from "../assets/cyber-agent-shooting.webp";
import cyberAgentSitting from "../assets/cyber-agent-sitting.webp";
import cyberAgentSneaking from "../assets/cyber-agent-sneaking.webp";
import cyberAgentStandard from "../assets/cyber-agent-standard.webp";
import cyberAgentThinking from "../assets/cyber-agent-thinking.webp";
import cyberAgentWaiting from "../assets/cyber-agent-waiting.webp";
import cyberAgentWeapon from "../assets/cyber-agent-weapon.webp";

export const HERO_IMAGES = [
  { id: 1, src: cyberAgentStandard },
  { id: 2, src: cyberAgentSad },
  { id: 3, src: cyberAgentThinking },
  { id: 4, src: cyberAgentSitting },
  { id: 5, src: cyberAgentAction },
  { id: 6, src: cyberAgentHealing },
  { id: 7, src: cyberAgentWeapon },
  { id: 8, src: cyberAgentHiding },
  { id: 9, src: cyberAgentSearching },
  { id: 10, src: cyberAgentShooting },
  { id: 11, src: cyberAgentSneaking },
  { id: 12, src: cyberAgentWaiting },
  { id: 13, src: cyberAgent10 },
  { id: 14, src: cyberAgent11 },
  { id: 15, src: cyberAgent12 },
  { id: 16, src: cyberAgent13 },
];

export function getRandomHeroImage() {
  const index = Math.floor(Math.random() * HERO_IMAGES.length);
  return HERO_IMAGES[index];
}

export function getHeroImageById(id) {
  const numericId = Number(id);
  return HERO_IMAGES.find((img) => img.id === numericId) || null;
}
