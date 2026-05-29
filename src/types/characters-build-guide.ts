import type { Arc } from "@/types/arcs";
import type { Cartridge } from "@/types/cartridges";
import type { Character, CharacterAwakeningSkillKey, CharacterSkillKey } from "@/types/characters";
import type { Stat } from "@/types/stats";
import type { VideoSource } from "@/types/video-sources";

export type CharacterBuildGuide = {
  id: Character["id"];
  recommendedArcs: Array<{ id: Arc["id"] }>;
  recommendedCartridges: Array<{ id: Cartridge["id"] }>;
  cartridgeBestMainStat: Array<Stat>;
  bestSubStats: Array<{ value: Stat; priority: number }>;
  recommendedAwakeningSkills: Record<CharacterAwakeningSkillKey, CharacterBuildGuideRecommendedSkill | undefined>;
  recommendedSkills?: Record<CharacterSkillKey, CharacterBuildGuideRecommendedSkill | undefined>;
  bestTeams: Array<{ title: string } & Record<"slot1" | "slot2" | "slot3" | "slot4", Array<Character["id"]>>>;
  videoSourceIds: Array<VideoSource["id"]>;
};
export type CharacterBuildGuideListItem = Pick<CharacterBuildGuide, "id">;
export type CharacterBuildGuideRecommendedSkill = { priority: number };
