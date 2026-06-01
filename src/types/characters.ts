import { CharacterIds, CharacterSkillKeys } from "@/enums/characters";
import type { ArcTypeId } from "@/types/arc-types";
import type { CharacterRoleId } from "@/types/character-roles";
import type { ElementId } from "@/types/elements";
import type { RankId } from "@/types/ranks";

export type Character = {
  id: CharacterId;
  name: string;
  rankId: RankId;
  elementId: ElementId;
  arcTypeId?: ArcTypeId;
  roleId?: CharacterRoleId;
  version?: string;
  image: string;
  imageWithElementAndRank?: string;
  awakeningSkills?: Record<CharacterAwakeningSkillKey, string>;
  skills?: Record<CharacterSkillKey, string>;
};
export type CharacterAwakeningSkillKey = "1" | "2" | "3" | "4" | "5" | "6";
export type CharacterId = typeof CharacterIds[keyof typeof CharacterIds];
export type CharacterListItem = Character;
export type CharacterSkillKey = keyof typeof CharacterSkillKeys;
