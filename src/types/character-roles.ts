import { CharacterRoleIds } from "@/enums/character-roles";

export type CharacterRole = { id: CharacterRoleId; name: string; image: string };
export type CharacterRoleId = typeof CharacterRoleIds[keyof typeof CharacterRoleIds];
