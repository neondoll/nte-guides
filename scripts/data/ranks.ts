import { RankIds } from "../../src/enums/ranks";
import type { Rank } from "../../src/types/ranks";

const image = (value: string) => `images/ranks/${value}`;

export default {
  [RankIds.A]: { id: RankIds.A, name: "A", image: image("a.png"), order: 2 },
  [RankIds.B]: { id: RankIds.B, name: "B", image: image("b.png"), order: 3 },
  [RankIds.S]: { id: RankIds.S, name: "S", image: image("s.png"), order: 1 },
} as Record<Rank["id"], Rank>;
