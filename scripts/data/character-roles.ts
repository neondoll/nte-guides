import { CharacterRoleIds } from "../../src/enums/character-roles";
import type { CharacterRole } from "../../src/types/character-roles";

export default [
  { id: CharacterRoleIds.Buff, name: "Усиление", image: "images/character-roles/buff.png" },
  { id: CharacterRoleIds.Damage, name: "Урон", image: "images/character-roles/damage.png" },
  { id: CharacterRoleIds.Survival, name: "Выживание", image: "images/character-roles/survival.png" },
] as Array<CharacterRole>;
