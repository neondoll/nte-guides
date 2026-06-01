import { ArcTypeIds } from "@/enums/arc-types";

export type ArcType = { id: ArcTypeId; name: string; image: string };
export type ArcTypeId = typeof ArcTypeIds[keyof typeof ArcTypeIds];
