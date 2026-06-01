import { ModuleIds } from "@/enums/modules";

export type Module = { id: ModuleId; type: 2 | 3 | 4; image: string };
export type ModuleId = typeof ModuleIds[keyof typeof ModuleIds];
