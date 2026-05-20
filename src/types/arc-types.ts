import { ArcTypeIds } from "@/enums/arc-types";

export interface ArcType {
  id: typeof ArcTypeIds[keyof typeof ArcTypeIds];
  name: string;
  image: string;
}

export type ArcTypeListItem = ArcType;
