import { ArcTypeIds } from "../../src/enums/arc-types";
import type { ArcType } from "../../src/types/arc-types";

export default [
  { id: ArcTypeIds.Gas, name: "Газовый", image: "images/arc-types/gas.png" },
  { id: ArcTypeIds.Liquid, name: "Жидкий", image: "images/arc-types/liquid.png" },
  { id: ArcTypeIds.Plasma, name: "Плазменный", image: "images/arc-types/plasma.png" },
  { id: ArcTypeIds.Solid, name: "Твёрдый", image: "images/arc-types/solid.png" },
  { id: ArcTypeIds.Synthesis, name: "Гибридный", image: "images/arc-types/synthesis.png" },
] as Array<ArcType>;
