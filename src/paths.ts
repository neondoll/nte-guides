import type { Arc } from "@/types/arcs";
import type { Cartridge } from "@/types/cartridges";
import type { Character } from "@/types/characters";

const PATHS = {
  Arc: (arcId: Arc["id"] | string) => `/arcs/${arcId}`,
  Arcs: "/arcs",
  Cartridge: (cartridgeId: Cartridge["id"] | string) => `/cartridges/${cartridgeId}`,
  Cartridges: "/cartridges",
  Character: (characterId: Character["id"] | string) => `/characters/${characterId}`,
  Characters: "/characters",
  Home: "/",
};
export default PATHS;
