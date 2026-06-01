import { CharacterRoleIds } from "../../src/enums/character-roles";
import type { CharacterRole } from "../../src/types/character-roles";

const image = (value: string) => `images/character-roles/${value}`;

export default {
  [CharacterRoleIds.Buff]: { id: CharacterRoleIds.Buff, name: "Усиление", image: image("buff.png") },
  [CharacterRoleIds.Damage]: { id: CharacterRoleIds.Damage, name: "Урон", image: image("damage.png") },
  [CharacterRoleIds.Survival]: { id: CharacterRoleIds.Survival, name: "Выживание", image: image("survival.png") },
} as Record<CharacterRole["id"], CharacterRole>;
