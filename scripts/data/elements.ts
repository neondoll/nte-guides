import { ElementIds } from "../../src/enums/elements";
import type { Element } from "../../src/types/elements";

const image = (value: string) => `images/elements/${value}`;

export default {
  [ElementIds.Anima]: { id: ElementIds.Anima, name: "Анима", image: image("anima.png") },
  [ElementIds.Chaos]: { id: ElementIds.Chaos, name: "Хаос", image: image("chaos.png") },
  [ElementIds.Cosmos]: { id: ElementIds.Cosmos, name: "Космос", image: image("cosmos.png") },
  [ElementIds.Incantation]: { id: ElementIds.Incantation, name: "Чары", image: image("incantation.png") },
  [ElementIds.Lakshana]: { id: ElementIds.Lakshana, name: "Лакшана", image: image("lakshana.png") },
  [ElementIds.Psyche]: { id: ElementIds.Psyche, name: "Психика", image: image("psyche.png") },
} as Record<Element["id"], Element>;
