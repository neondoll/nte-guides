import type { ArcId } from "@/types/arcs";
import type { CartridgeId } from "@/types/cartridges";
import type { CharacterAwakeningSkillKey, CharacterId, CharacterSkillKey } from "@/types/characters";
import type { Stat } from "@/types/stats";
import type { VideoSourceId } from "@/types/video-sources";

export type CharacterBuildGuide = {
  id: CharacterId;
  recommendedArcs: Array<{ id: ArcId; priority?: number; explanation?: string }>;
  recommendedCartridges: Array<{ id: CartridgeId }>;
  cartridgeBestMainStat: Stat[];
  bestSubStats: Array<{ value: Stat; priority: number }>;
  targetAttributes?: string[];
  recommendedAwakeningSkills?: Record<CharacterAwakeningSkillKey, CharacterBuildGuideRecommendedSkill | undefined>;
  recommendedSkills?: Record<CharacterSkillKey, CharacterBuildGuideRecommendedSkill | undefined>;
  bestTeams: Array<{ title: string; explanation?: string } & Record<"slot1" | "slot2" | "slot3" | "slot4", CharacterId[]>>;
  videoSourceIds: VideoSourceId[];
};
export type CharacterBuildGuideListItem = Pick<CharacterBuildGuide, "id">;
export type CharacterBuildGuideRecommendedSkill = { priority: number };
