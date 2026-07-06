import { RankIds } from "../../src/enums/ranks";
import type { Rank } from "../../src/types/ranks";

const image = (value: string) => `images/ranks/${value}`;

export default {
  A: { id: RankIds.A, name: "A", image: image("a.png"), order: 2 },
  B: { id: RankIds.B, name: "B", image: image("b.png"), order: 3 },
  S: { id: RankIds.S, name: "S", image: image("s.png"), order: 1 },
} as Record<keyof typeof RankIds, Rank>;
