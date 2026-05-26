import { ArcIds } from "@/enums/arcs";
import type { ArcType } from "@/types/arc-types";
import type { Rank } from "@/types/ranks";

export interface Arc {
  id: typeof ArcIds[keyof typeof ArcIds];
  name: string;
  rankId: Rank["id"];
  typeId: ArcType["id"];
  baseATK80: number;
  substat: string;
  substat80: string | number;
  image?: string;
}

export type ArcListItem = Arc;
