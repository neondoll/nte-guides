import characters from "./characters";
import { NineHundredAndNinetyNineNightsClassIds } from "../../src/enums/999-nights-classes";
import type { NineHundredAndNinetyNineNightsClass } from "../../src/types/999-nights-classes";

export default {
  Berserker: {
    id: NineHundredAndNinetyNineNightsClassIds.Berserker,
    name: `Варвар\n(${characters.Mint.name})`,
    image: characters.Mint.image,
  },
  DragonKnight: {
    id: NineHundredAndNinetyNineNightsClassIds.DragonKnight,
    name: `Рыцарь-дракон\n(${characters.Shinku.name})`,
    image: characters.Shinku.image,
  },
  Mage: {
    id: NineHundredAndNinetyNineNightsClassIds.Mage,
    name: `Маг\n(${characters.Iroi.name})`,
    image: characters.Iroi.image,
  },
  Swordsman: {
    id: NineHundredAndNinetyNineNightsClassIds.Swordsman,
    name: `Мечник\n(${characters.EsperZero.name})`,
    image: characters.EsperZero.image,
  },
} as Record<keyof typeof NineHundredAndNinetyNineNightsClassIds, NineHundredAndNinetyNineNightsClass>;
