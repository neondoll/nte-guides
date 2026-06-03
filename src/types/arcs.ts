import { ArcIds } from "@/enums/arcs";
import type { ArcTypeId } from "@/types/arc-types";
import type { RankId } from "@/types/ranks";
import type { Stat } from "@/types/stats";

export type Arc = {
  id: ArcId;
  name: string;
  rankId: RankId;
  typeId: ArcTypeId;
  baseATK80: number;
  subStat: Stat;
  subStat80: string | number;
  effect: { title: string; text: string };
  image?: string;
};
export type ArcId = typeof ArcIds[keyof typeof ArcIds];
export type ArcListItem = Arc;
