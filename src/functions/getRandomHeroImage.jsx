import cyberAgentAction from "../assets/cyber-agent-action.png";
import cyberAgentHealing from "../assets/cyber-agent-healing.png";
import cyberAgentSad from "../assets/cyber-agent-sad.png";
import cyberAgentSitting from "../assets/cyber-agent-sitting.png";
import cyberAgentStandard from "../assets/cyber-agent-standard.png";
import cyberAgentThinking from "../assets/cyber-agent-thinking.png";
import cyberAgentWeapon from "../assets/cyber-agent-weapon.png";

export const HERO_IMAGES = [
  { id: 1, src: cyberAgentStandard },
  { id: 2, src: cyberAgentSad },
  { id: 3, src: cyberAgentThinking },
  { id: 4, src: cyberAgentSitting },
  { id: 5, src: cyberAgentAction },
  { id: 6, src: cyberAgentHealing },
  { id: 7, src: cyberAgentWeapon },
];

export function getRandomHeroImage() {
  const index = Math.floor(Math.random() * HERO_IMAGES.length);
  return HERO_IMAGES[index];
}

export function getHeroImageById(id) {
  const numericId = Number(id);
  return HERO_IMAGES.find((img) => img.id === numericId) || null;
}
