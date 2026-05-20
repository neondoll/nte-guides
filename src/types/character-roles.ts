import { CharacterRoleIds } from "@/enums/character-roles";

export interface CharacterRole {
  id: typeof CharacterRoleIds[keyof typeof CharacterRoleIds];
  name: string;
  image: string;
}

export type CharacterRoleListItem = CharacterRole;
