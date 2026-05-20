import { CharacterIds } from "@/enums/characters";
import type { ArcType } from "@/types/arc-types";
import type { CharacterRole } from "@/types/character-roles";
import type { Element } from "@/types/elements";
import type { Rank } from "@/types/ranks";

export interface Character {
  id: typeof CharacterIds[keyof typeof CharacterIds];
  name: string;
  rankId: Rank["id"];
  elementId: Element["id"];
  arcTypeId?: ArcType["id"];
  roleId?: CharacterRole["id"];
  version?: string;
  image: string;
  imageWithElementAndRank?: string;
}

export type CharacterListItem = Character;
