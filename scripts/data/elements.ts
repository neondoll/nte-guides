import { ElementIds } from "../../src/enums/elements";
import type { Element } from "../../src/types/elements";

export default [
  { id: ElementIds.Anima, name: "Анима", image: "images/elements/anima.png" },
  { id: ElementIds.Chaos, name: "Хаос", image: "images/elements/chaos.png" },
  { id: ElementIds.Cosmos, name: "Космос", image: "images/elements/cosmos.png" },
  { id: ElementIds.Incantation, name: "Чары", image: "images/elements/incantation.png" },
  { id: ElementIds.Lakshana, name: "Лакшана", image: "images/elements/lakshana.png" },
  { id: ElementIds.Psyche, name: "Психика", image: "images/elements/psyche.png" },
] as Array<Element>;
