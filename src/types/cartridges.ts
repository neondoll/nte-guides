import { CartridgeIds } from "@/enums/cartridges";
import type { ModuleId } from "@/types/modules";

export type Cartridge = {
  id: CartridgeId;
  name: string;
  requiredModuleIds: ModuleId[];
  setEffects: Record<2 | 4, string>;
  image: string;
};
export type CartridgeId = typeof CartridgeIds[keyof typeof CartridgeIds];
export type CartridgeListItem = Cartridge;
