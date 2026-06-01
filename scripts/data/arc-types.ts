import { ArcTypeIds } from "../../src/enums/arc-types";
import type { ArcType } from "../../src/types/arc-types";

const image = (value: string) => `images/arc-types/${value}`;

export default {
  [ArcTypeIds.Gas]: { id: ArcTypeIds.Gas, name: "Газовый", image: image("gas.png") },
  [ArcTypeIds.Liquid]: { id: ArcTypeIds.Liquid, name: "Жидкий", image: image("liquid.png") },
  [ArcTypeIds.Plasma]: { id: ArcTypeIds.Plasma, name: "Плазменный", image: image("plasma.png") },
  [ArcTypeIds.Solid]: { id: ArcTypeIds.Solid, name: "Твёрдый", image: image("solid.png") },
  [ArcTypeIds.Synthesis]: { id: ArcTypeIds.Synthesis, name: "Гибридный", image: image("synthesis.png") },
} as Record<ArcType["id"], ArcType>;
