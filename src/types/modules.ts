import { ModuleIds } from "@/enums/modules";

export interface Module {
  id: typeof ModuleIds[keyof typeof ModuleIds];
  type: 2 | 3 | 4;
  image: string;
}
