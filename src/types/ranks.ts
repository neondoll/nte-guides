import { RankIds } from "@/enums/ranks";

export interface Rank {
  id: typeof RankIds[keyof typeof RankIds];
  name: string;
  image: string;
}

export type RankListItem = Rank;
