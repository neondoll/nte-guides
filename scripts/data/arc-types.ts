import { ArcTypeIds } from "../../src/enums/arc-types";
import type { ArcType } from "../../src/types/arc-types";

const image = (value: string) => `images/arc-types/${value}`;

export default {
  Condensate: { id: ArcTypeIds.Condensate, name: "Гибридный", image: image("condensate.png") },
  Gas: { id: ArcTypeIds.Gas, name: "Газовый", image: image("gas.png") },
  Liquid: { id: ArcTypeIds.Liquid, name: "Жидкий", image: image("liquid.png") },
  Plasma: { id: ArcTypeIds.Plasma, name: "Плазменный", image: image("plasma.png") },
  Solid: { id: ArcTypeIds.Solid, name: "Твёрдый", image: image("solid.png") },
} as Record<keyof typeof ArcTypeIds, ArcType>;
