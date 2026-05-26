import { CartridgeIds } from "@/enums/cartridges";
import type { Module } from "@/types/modules";

export interface Cartridge {
  id: typeof CartridgeIds[keyof typeof CartridgeIds];
  name: string;
  requiredModuleIds: Module["id"][];
  setEffects: Record<2 | 4, string>;
  image: string;
}

export type CartridgeListItem = Cartridge;
