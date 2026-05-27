import type { Arc } from "@/types/arcs";
import type { Cartridge } from "@/types/cartridges";
import type { Character } from "@/types/characters";
import type { Stat } from "@/types/stats";

export type CharacterBuildGuide = {
  id: Character["id"];
  recommendedArcs: Array<{ id: Arc["id"] }>;
  recommendedCartridges: Array<{ id: Cartridge["id"] }>;
  cartridgeBestMainStat: Array<Stat>;
  subStats: Array<{ value: Stat; priority: string }>;
  bestTeams: Array<{ title: string } & Record<"slot1" | "slot2" | "slot3" | "slot4", {
    title: string;
    variants: Array<Character["id"]>;
  }>>;
  recommendedSkills: Array<{ value: string; priority: string }>;
  recommendedAwakeningSkills: Array<{ value: string; priority: string }>;
};
