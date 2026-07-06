import { CharacterRoleIds } from "../../src/enums/character-roles";
import type { CharacterRole } from "../../src/types/character-roles";

const image = (value: string) => `images/character-roles/${value}`;

export default {
  Buff: { id: CharacterRoleIds.Buff, name: "Усиление", image: image("buff.png") },
  Damage: { id: CharacterRoleIds.Damage, name: "Урон", image: image("damage.png") },
  Survival: { id: CharacterRoleIds.Survival, name: "Выживание", image: image("survival.png") },
} as Record<CharacterRole["id"], CharacterRole>;
