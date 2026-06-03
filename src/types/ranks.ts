import { RankIds } from "@/enums/ranks";

export type Rank = { id: RankId; name: string; image: string; order: number };
export type RankId = typeof RankIds[keyof typeof RankIds];
