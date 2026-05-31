import { RankIds } from "@/enums/ranks";

export type Rank = { id: typeof RankIds[keyof typeof RankIds]; name: string; image: string };
