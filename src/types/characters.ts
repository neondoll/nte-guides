import { CharacterIds, CharacterSkillKeys } from "@/enums/characters";
import type { ArcType } from "@/types/arc-types";
import type { CharacterRole } from "@/types/character-roles";
import type { Element } from "@/types/elements";
import type { Rank } from "@/types/ranks";

export type Character = {
  id: typeof CharacterIds[keyof typeof CharacterIds];
  name: string;
  rankId: Rank["id"];
  elementId: Element["id"];
  arcTypeId?: ArcType["id"];
  roleId?: CharacterRole["id"];
  version?: string;
  image: string;
  imageWithElementAndRank?: string;
  awakeningSkills?: Record<CharacterAwakeningSkillKey, string>;
  skills?: Record<CharacterSkillKey, string>;
};
export type CharacterAwakeningSkillKey = "1" | "2" | "3" | "4" | "5" | "6";
export type CharacterListItem = Character;
export type CharacterSkillKey = keyof typeof CharacterSkillKeys;
