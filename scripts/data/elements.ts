import { ElementIds } from "../../src/enums/elements";
import type { Element } from "../../src/types/elements";

const image = (value: string) => `images/elements/${value}`;

export default {
  Anima: { id: ElementIds.Anima, name: "Анима", image: image("anima.png") },
  Chaos: { id: ElementIds.Chaos, name: "Хаос", image: image("chaos.png") },
  Cosmos: { id: ElementIds.Cosmos, name: "Космос", image: image("cosmos.png") },
  Incantation: { id: ElementIds.Incantation, name: "Чары", image: image("incantation.png") },
  Lakshana: { id: ElementIds.Lakshana, name: "Лакшана", image: image("lakshana.png") },
  Psyche: { id: ElementIds.Psyche, name: "Психика", image: image("psyche.png") },
} as Record<keyof typeof ElementIds, Element>;
