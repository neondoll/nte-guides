import { RankIds } from "../../src/enums/ranks";
import type { Rank } from "../../src/types/ranks";

export default [
  { id: RankIds.A, name: "A", image: "images/ranks/a.png" },
  { id: RankIds.B, name: "B", image: "images/ranks/b.png" },
  { id: RankIds.S, name: "S", image: "images/ranks/s.png" },
] as Array<Rank>;
