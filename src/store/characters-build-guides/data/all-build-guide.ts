import { CharacterIds } from "@/enums/characters";
import type { CharacterBuildGuide } from "@/types/characters-build-guides";

export default {
  [CharacterIds.Adler]: () => import("./Adler-build-guide"),
  [CharacterIds.Aurelia]: () => import("./Aurelia-build-guide"),
} as Record<CharacterBuildGuide["id"], () => Promise<{ default: CharacterBuildGuide }>>;
