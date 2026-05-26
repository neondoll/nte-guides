import type { Cartridge } from "@/types/cartridges";

const PATHS = {
  Arcs: "/arcs",
  Cartridge: (cartridgeId: Cartridge["id"] | string) => `/cartridges/${cartridgeId}`,
  Cartridges: "/cartridges",
  Characters: "/characters",
  Home: "/",
};
export default PATHS;
