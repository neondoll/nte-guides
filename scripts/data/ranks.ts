import { RankIds } from "../../src/enums/ranks";
import type { Rank } from "../../src/types/ranks";

const image = (value: string) => `images/ranks/${value}`;

export default {
  [RankIds.A]: { id: RankIds.A, name: "A", image: image("a.png") },
  [RankIds.B]: { id: RankIds.B, name: "B", image: image("b.png") },
  [RankIds.S]: { id: RankIds.S, name: "S", image: image("s.png") },
} as Record<Rank["id"], Rank>;
