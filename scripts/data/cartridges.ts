import { CartridgeIds } from "../../src/enums/cartridges";
import { ModuleIds } from "../../src/enums/modules";
import type { Cartridge } from "../../src/types/cartridges";

export default [
  {
    id: CartridgeIds.CrimsonTwinButterflies,
    name: "Багрянец: Две бабочки",
    requiredModuleIds: [ModuleIds.I2, ModuleIds.I3R, ModuleIds.J, ModuleIds.S],
    setEffects: {
      2: "Урон от чар +10 %.",
      4: "Когда враги поблизости получают урон от чар от команды, увеличивает атаку владельца на 6 %. Складывается до 6 раз, каждый уровень действует 10 сек. Эффект остается активным, когда персонаж не на поле боя.",
    },
    image: "images/cartridges/crimson-twin-butterflies.png",
  },
  {
    id: CartridgeIds.DevilsBloodCurse,
    name: "Кровь демона: Проклятие",
    requiredModuleIds: [ModuleIds.I2, ModuleIds.I3, ModuleIds.JR, ModuleIds.SR],
    setEffects: {
      2: "Урон психики +10 %.",
      4: "Увеличивает урон владельца на 18 %. Бонус повышается до 36 % против врагов, поражённых Новой или Следом.",
    },
    image: "images/cartridges/devils-blood-curse.png",
  },
  {
    id: CartridgeIds.Diabolos,
    name: "Диабло",
    requiredModuleIds: [ModuleIds.I2, ModuleIds.JR, ModuleIds.J, ModuleIds.I4R],
    setEffects: {
      2: "Урон хаоса +10 %.",
      4: "Игнорирует 12 % сопротивления хаосу у противников. Игнорирует 24 % сопротивления хаосу у противников в течение 20 сек. после того, как владелец участвует в реакциях «Нова» или «Ожог».",
    },
    image: "images/cartridges/diabolos.png",
  },
  {
    id: CartridgeIds.FirefliesAndTheForest,
    name: "Светлячки и лес",
    requiredModuleIds: [ModuleIds.I2R, ModuleIds.I3, ModuleIds.L, ModuleIds.SR],
    setEffects: {
      2: "Урон анимы +10 %.",
      4: "Когда враги поблизости получают урон анимы от команды, увеличивает крит. урон владельца на 8 %. Складывается до 7 раз, каждый уровень действует 10 сек. Эффект остаётся активным, когда персонаж не на поле боя.",
    },
    image: "images/cartridges/fireflies-and-the-forest.png",
  },
  {
    id: CartridgeIds.KingdomsGuard,
    name: "Королевский страж",
    requiredModuleIds: [ModuleIds.I3R, ModuleIds.I3, ModuleIds.LR, ModuleIds.J],
    setEffects: {
      2: "Защита +15 %.",
      4: "Увеличивает прочность щитов владельца на 20 %.",
    },
    image: "images/cartridges/kingdoms-guard.png",
  },
  {
    id: CartridgeIds.LostRadiance,
    name: "Утраченное сияние",
    requiredModuleIds: [ModuleIds.I2R, ModuleIds.L, ModuleIds.LR, ModuleIds.I4],
    setEffects: {
      2: "Урон космоса +10 %.",
      4: "После применения владельцем сверхспособности игнорирует 25 % защита врагов в течение 20 сек. Эффект не складывается.",
    },
    image: "images/cartridges/lost-radiance.png",
  },
  {
    id: CartridgeIds.QuietManor,
    name: "Тихое поместье",
    requiredModuleIds: [ModuleIds.I2R, ModuleIds.I2, ModuleIds.I4, ModuleIds.SR],
    setEffects: {
      2: "Ментальный урон +10 %.",
      4: "Даёт владельцу бонус к ментальному урону в 12 % за каждую базовую атаку, складывается до 3 раз. Каждый уровень действует 6 сек.",
    },
    image: "images/cartridges/quiet-manor.png",
  },
  {
    id: CartridgeIds.ShadowCreed,
    name: "Кредо теней",
    requiredModuleIds: [ModuleIds.I2R, ModuleIds.I2, ModuleIds.I4R, ModuleIds.SR],
    setEffects: {
      2: "Атака +10 %.",
      4: "После применения навыка увеличивает атаку владельца на 25 % на 20 сек.",
    },
    image: "images/cartridges/shadow-creed.png",
  },
  {
    id: CartridgeIds.SpeedyHedgehog,
    name: "Скоростной ёж",
    requiredModuleIds: [ModuleIds.L, ModuleIds.JR, ModuleIds.LR, ModuleIds.J],
    setEffects: {
      2: "Скорость зарядки +12 %.",
      4: "После применения владельцем сверхспособности увеличивает атаку всех союзников на 15 % на 20 сек. Эффект не складывается.",
    },
    image: "images/cartridges/speedy-hedgehog.png",
  },
  {
    id: CartridgeIds.StreetBoxer,
    name: "Уличный боец",
    requiredModuleIds: [ModuleIds.I2R, ModuleIds.I3R, ModuleIds.LR, ModuleIds.S],
    setEffects: {
      2: "Урон лакшаны +10 %.",
      4: "Увеличивает шанс критического удара владельца на 14 %. При срабатывании Реморы или Следа от действий команды бонус увеличивается до 14 % на 20 сек.",
    },
    image: "images/cartridges/street-boxer.png",
  },
  {
    id: CartridgeIds.TheasNightTavern,
    name: "Ночная таверна Теи",
    requiredModuleIds: [ModuleIds.I3R, ModuleIds.I3, ModuleIds.L, ModuleIds.JR],
    setEffects: {
      2: "ОЗ +10 %.",
      4: "Увеличивает бонус к лечению владельца на 20 %.",
    },
    image: "images/cartridges/theas-night-tavern.png",
  },
  {
    id: CartridgeIds.TinyBigAdventure,
    name: "Мини-мега приключение",
    requiredModuleIds: [ModuleIds.I2R, ModuleIds.I2, ModuleIds.I4R, ModuleIds.S],
    setEffects: {
      2: "ОЗ +10 %.",
      4: "Увеличивает макс. ОЗ владельца на 4 % при получении урона. Складывается до 10 раз, каждый уровень действует 10 сек. Применение сверхспособности немедленно дает 10 уровней.",
    },
    image: "images/cartridges/tiny-big-adventure.png",
  },
] as Array<Cartridge>;
