import { CharacterRoleIds } from "@/enums/character-roles";

export type CharacterRole = { id: typeof CharacterRoleIds[keyof typeof CharacterRoleIds]; name: string; image: string };
