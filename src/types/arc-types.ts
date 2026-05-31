import { ArcTypeIds } from "@/enums/arc-types";

export type ArcType = { id: typeof ArcTypeIds[keyof typeof ArcTypeIds]; name: string; image: string };
