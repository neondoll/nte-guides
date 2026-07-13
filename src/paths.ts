import type { ArcId } from "@/types/arcs";
import type { CartridgeId } from "@/types/cartridges";
import type { CharacterId } from "@/types/characters";

const PATHS = {
  Arc: (arcId: ArcId | string) => `/arcs/${arcId}`,
  Arcs: "/arcs",
  Cartridge: (cartridgeId: CartridgeId | string) => `/cartridges/${cartridgeId}`,
  Cartridges: "/cartridges",
  Character: (characterId: CharacterId | string) => `/characters/${characterId}`,
  Characters: "/characters",
  Home: "/",
  NineHundredAndNinetyNineNights: "/999-nights",
};
export default PATHS;
