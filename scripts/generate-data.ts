import fs from "fs/promises";
import path from "path";
import { loadEnv } from "vite";

import { ArcTypeIds } from "../src/enums/arc-types";
import { ArcIds } from "../src/enums/arcs";
import { CartridgeIds } from "../src/enums/cartridges";
import { CharacterRoleIds } from "../src/enums/character-roles";
import { CharacterIds } from "../src/enums/characters";
import { ElementIds } from "../src/enums/elements";
import { ModuleIds } from "../src/enums/modules";
import { RankIds } from "../src/enums/ranks";
import { Stats } from "../src/enums/stats";
import { VideoSourceIds } from "../src/enums/video-sources";
import type { ArcType, ArcTypeListItem } from "../src/types/arc-types";
import type { Arc, ArcListItem } from "../src/types/arcs";
import type { Cartridge, CartridgeListItem } from "../src/types/cartridges";
import type { CharacterRole, CharacterRoleListItem } from "../src/types/character-roles";
import type { Character, CharacterListItem } from "../src/types/characters";
import type { CharacterBuildGuide, CharacterBuildGuideListItem } from "../src/types/characters-build-guide";
import type { Element, ElementListItem } from "../src/types/elements";
import type { Module } from "../src/types/modules";
import type { Rank, RankListItem } from "../src/types/ranks";
import type { VideoSource } from "../src/types/video-sources";

type CategoryType = "arc-types" | "arcs" | "cartridges" | "character-roles" | "characters" | "characters-build-guide"
  | "elements" | "modules" | "ranks" | "video-sources";
type DataItem<T extends CategoryType>
  = T extends "arc-types" ? ArcType
    : T extends "arcs" ? Arc
      : T extends "cartridges" ? Cartridge
        : T extends "character-roles" ? CharacterRole
          : T extends "characters" ? Character
            : T extends "characters-build-guide" ? CharacterBuildGuide
              : T extends "elements" ? Element
                : T extends "modules" ? Module
                  : T extends "ranks" ? Rank
                    : T extends "video-sources" ? VideoSource
                      : never;
type DataListItem<T extends CategoryType>
  = T extends "arc-types" ? ArcTypeListItem
    : T extends "arcs" ? ArcListItem
      : T extends "cartridges" ? CartridgeListItem
        : T extends "character-roles" ? CharacterRoleListItem
          : T extends "characters" ? CharacterListItem
            : T extends "characters-build-guide" ? CharacterBuildGuideListItem
              : T extends "elements" ? ElementListItem
                : T extends "modules" ? Module
                  : T extends "ranks" ? RankListItem
                    : T extends "video-sources" ? VideoSource
                      : never;

interface CategoryConfig<T extends CategoryType> {
  data: DataItem<T>[];
  transformList: (item: DataItem<T>) => DataListItem<T>;
}

const env = loadEnv("development", process.cwd(), "");

const BASE_URL = env.VITE_BASE_URL || "/";
const OUTPUT_DIR = path.resolve("public/data");

const CATEGORIES = {
  "arc-types": {
    data: [
      { id: ArcTypeIds.Gas, name: "Газовый", image: BASE_URL + "images/arc-types/gas.png" },
      { id: ArcTypeIds.Liquid, name: "Жидкий", image: BASE_URL + "images/arc-types/liquid.png" },
      { id: ArcTypeIds.Plasma, name: "Плазменный", image: BASE_URL + "images/arc-types/plasma.png" },
      { id: ArcTypeIds.Solid, name: "Твёрдый", image: BASE_URL + "images/arc-types/solid.png" },
      { id: ArcTypeIds.Synthesis, name: "Гибридный", image: BASE_URL + "images/arc-types/synthesis.png" },
    ],
    transformList: item => item,
  },
  "arcs": {
    data: [
      {
        id: ArcIds.ATimeWillCome,
        name: "Время придет",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Synthesis,
        baseATK80: 475,
        substat: Stats.CRIT_RATE,
        substat80: "20%",
        effect: {
          title: "Вознесение прилива",
          text: "Дает владельцу 10.00% к АТК, 10.00% к защита и 10.00% к ОЗ, когда в команде есть как минимум 3 разных типа эспера.",
        },
        image: BASE_URL + "images/arcs/a-time-will-come.png",
      },
      {
        id: ArcIds.BeHappy,
        name: "Be Happy",
        rankId: RankIds.B,
        typeId: ArcTypeIds.Gas,
        baseATK80: 316,
        substat: Stats.HP,
        substat80: "30%",
        image: BASE_URL + "images/arcs/be-happy.png",
      },
      {
        id: ArcIds.BlowUpTheCrowd,
        name: "Blow up the Crowd",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Solid,
        baseATK80: 512,
        substat: Stats.ATK,
        substat80: "27.5%",
        image: BASE_URL + "images/arcs/blow-up-the-crowd.png",
      },
      {
        id: ArcIds.CallOfTheTwistedCity,
        name: "Call of the Twisted City",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Liquid,
        baseATK80: 395,
        substat: Stats.HP,
        substat80: "37.5%",
        image: BASE_URL + "images/arcs/call-of-the-twisted-city.png",
      },
      {
        id: ArcIds.CamelliaSociety,
        name: "Сообщество Камелии",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Synthesis,
        baseATK80: 666,
        substat: Stats.CRIT_RATE,
        substat80: "12%",
        effect: {
          title: "Тихий сад",
          text: "Увеличивает крит. урон на 12.00% на 5 сек., когда ОЗ владельца снижаются без получения урона. Складывается до 4 раз. Открывает дугу: Тихий сад. Расходует 5.00% от текущих ОЗ и случайным образом проводит одну из следующих атак дуги: Тихий сад (перезарядка 25 сек.)\nСуровый упрёк: беспощадные упрёки ",
        },
        image: BASE_URL + "images/arcs/camellia-society.png",
      },
      {
        id: ArcIds.ClearSkies,
        name: "Clear Skies",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Liquid,
        baseATK80: 475,
        substat: Stats.ATK,
        substat80: "25%",
        image: BASE_URL + "images/arcs/clear-skies.png",
      },
      {
        id: ArcIds.ContemplativeCat,
        name: "Созерцательная кошка",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Gas,
        baseATK80: 512,
        substat: Stats.CRIT_DMG,
        substat80: "44%",
        effect: {
          title: "Маммон",
          text: "Увеличивает урон космоса на 2.50% за каждые 100 000 фонсов у владельца. Складывается до 10 раз.",
        },
        image: BASE_URL + "images/arcs/contemplative-cat.png",
      },
      {
        id: ArcIds.CosmosDazeWildReverie,
        name: "Cosmos Daze, Wild Reverie",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Gas,
        baseATK80: 475,
        substat: Stats.ATK,
        substat80: "25%",
        image: BASE_URL + "images/arcs/cosmos-daze-wild-reverie.png",
      },
      {
        id: ArcIds.DangerousGame,
        name: "Dangerous Game",
        rankId: RankIds.B,
        typeId: ArcTypeIds.Synthesis,
        baseATK80: 380,
        substat: "Break Intensity",
        substat80: 96,
        image: BASE_URL + "images/arcs/dangerous-game.png",
      },
      {
        id: ArcIds.DayOff,
        name: "Выходной",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Solid,
        baseATK80: 512,
        substat: Stats.CHARGE_EFFICIENCY,
        substat80: "33%",
        effect: {
          title: "Затмение",
          text: "Увеличивает атаку владельца на 30.00%. Открывает дугу: Затмение.\nДуга: Затмение - владелец создает затмение на 40 сек. Каждый убитый во время затмения враг восстанавливает 6 ед. энергии сверхспособности, до 5 раз. (Перезарядка: 300 сек.)",
        },
        image: BASE_URL + "images/arcs/day-off.png",
      },
      {
        id: ArcIds.DrawnBlade,
        name: "Обнаженный клинок",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Plasma,
        baseATK80: 395,
        substat: Stats.ATK,
        substat80: "37.5%",
        effect: {
          title: "Алый Хексблейд",
          text: "Наносит дополнительный урон от чар в размере 200.00% от атаки, когда владелец запускает ответный удар.",
        },
        image: BASE_URL + "images/arcs/drawn-blade.png",
      },
      {
        id: ArcIds.EternalWaltz,
        name: "Вечный вальс",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Synthesis,
        baseATK80: 424,
        substat: Stats.HP,
        substat80: "41.2%",
        effect: {
          title: "Арахна",
          text: "Увеличивает макс. ОЗ на 20.00%.\nУвеличивает наносимый ментальный урон на 10.00% на 10 сек. после того, как владелец применяет сверхспособность.",
        },
        image: BASE_URL + "images/arcs/eternal-waltz.png",
      },
      {
        id: ArcIds.FailingYouHeavyInMyHeart,
        name: "Failing You, Heavy in My Heart",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Gas,
        baseATK80: 475,
        substat: "Break Intensity",
        substat80: 120,
        image: BASE_URL + "images/arcs/failing-you-heavy-in-my-heart.png",
      },
      {
        id: ArcIds.FirstStepToSuccess,
        name: "First Step to Success",
        rankId: RankIds.B,
        typeId: ArcTypeIds.Solid,
        baseATK80: 380,
        substat: Stats.ATK,
        substat80: "20%",
        image: BASE_URL + "images/arcs/first-step-to-success.png",
      },
      {
        id: ArcIds.FluffOfFearlessness,
        name: "Fluff of Fearlessness",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Solid,
        baseATK80: 512,
        substat: Stats.CRIT_RATE,
        substat80: "22%",
        image: BASE_URL + "images/arcs/fluff-of-fearlessness.png",
      },
      {
        id: ArcIds.FluffOfFerocity,
        name: "Fluff of Ferocity",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Synthesis,
        baseATK80: 512,
        substat: Stats.ATK,
        substat80: "27.5%",
        image: BASE_URL + "images/arcs/fluff-of-ferocity.png",
      },
      {
        id: ArcIds.FluffOfFinesse,
        name: "Fluff of Finesse",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Gas,
        baseATK80: 512,
        substat: Stats.ATK,
        substat80: "27.5%",
        image: BASE_URL + "images/arcs/fluff-of-finesse.png",
      },
      {
        id: ArcIds.FluffOfFleetness,
        name: "Fluff of Fleetness",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Liquid,
        baseATK80: 512,
        substat: Stats.CRIT_DMG,
        substat80: "44%",
        image: BASE_URL + "images/arcs/fluff-of-fleetness.png",
      },
      {
        id: ArcIds.FluffOfFortitude,
        name: "Пух стойкости",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Plasma,
        baseATK80: 512,
        substat: Stats.ATK,
        substat80: "27.50%",
        effect: {
          title: "Конфета мордоворота",
          text: "Увеличивает урон владельца на 22.00%. Эффект увеличивается до 28.00% против врагов, у которых меньше 50 % ОЗ.",
        },
        image: BASE_URL + "images/arcs/fluff-of-fortitude.png",
      },
      {
        id: ArcIds.GoodBoysGrandAdventure,
        name: "Большой квест хорошего мальчика",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Gas,
        baseATK80: 474,
        substat: Stats.ATK,
        substat80: "45%",
        effect: {
          title: "Морфикс",
          text: "Увеличивает скорость зарядки на 18.00%.\nУвеличивает атаку команды на 10.00% на 20 сек., когда владелец применяет сверхспособность. Увеличивает атаку команды ещё на 6.00%, если враги находятся под контролем эффекта сверхспособности. Эффекты с одинаковым названием не ",
        },
        image: BASE_URL + "images/arcs/good-boys-grand-adventure.png",
      },
      {
        id: ArcIds.HethereausKeeper,
        name: "Хранитель хэтеро",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Solid,
        baseATK80: 512,
        substat: Stats.ATK,
        substat80: "27.5%",
        image: BASE_URL + "images/arcs/hethereaus-keeper.png",
      },
      {
        id: ArcIds.MarchingBeyondTime,
        name: "Marching Beyond Time",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Solid,
        baseATK80: 570,
        substat: Stats.CRIT_RATE,
        substat80: "24%",
        image: BASE_URL + "images/arcs/marching-beyond-time.png",
      },
      {
        id: ArcIds.MindRoyale,
        name: "Mind Royale",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Liquid,
        baseATK80: 555,
        substat: "Break Intensity",
        substat80: 60,
        image: BASE_URL + "images/arcs/mind-royale.png",
      },
      {
        id: ArcIds.Oraora,
        name: "Ора-ора!",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Plasma,
        baseATK80: 395,
        substat: Stats.ATK,
        substat80: "37.5%",
        effect: {
          title: "Панчер Ора",
          text: "За каждую проведенную базовую атаку увеличивает урон от базовых атак владельца на 2.00% на 10 сек., складывается до 10 раз. У каждого уровня своя длительность.",
        },
        image: BASE_URL + "images/arcs/oraora.png",
      },
      {
        id: ArcIds.RagingFlames,
        name: "Бушующее пламя",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Plasma,
        baseATK80: 666,
        substat: Stats.CRIT_DMG,
        substat80: "24%",
        effect: {
          title: "Всадник без головы",
          text: "Увеличивает урон лакшаны на 15.00%.\nУвеличивает урон от навыка перенаправления и сверхспособности владельца на 10.00% на 10 сек. после применения сверхспособности. Пока эффект действует, увеличивает урон от навыка перенаправления владельца на 5.00% за применение, складываясь до 2 раз.",
        },
        image: BASE_URL + "images/arcs/raging-flames.png",
      },
      {
        id: ArcIds.ReadyReady,
        name: "Полная готовность",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Plasma,
        baseATK80: 570,
        substat: Stats.CRIT_RATE,
        substat80: "24%",
        image: BASE_URL + "images/arcs/ready-ready.png",
        effect: {
          title: "Талисман командира-тигра",
          text: "Увеличивает атаку на 15.00%.\nКогда вы применяете навык перенаправления или сверхспособность, увеличивает урон от базовых атак и критического контрудара на 15.00% на 15 сек. Складывается до 2 раз.\nВладелец получает левый талисман тигра, когда применяет навык перенаправления, правый талисман тигра, когда применяет сверхспособность.\nЕсли владелец получит талисман одного типа в течение 15 сек. после получения второго, открывается Талисман командира-тигра.\nДуга: Талисман командира-тигра - увеличивает урон владельца против боссов на 10.00% на 10 сек.",
        },
      },
      {
        id: ArcIds.RealMusic,
        name: "\"Real Music\"",
        rankId: RankIds.B,
        typeId: ArcTypeIds.Liquid,
        baseATK80: 380,
        substat: Stats.ATK,
        substat80: "20%",
        image: BASE_URL + "images/arcs/real-music.png",
      },
      {
        id: ArcIds.RealityRefuge,
        name: "Reality Refuge",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Solid,
        baseATK80: 570,
        substat: Stats.ATK,
        substat80: "30%",
        image: BASE_URL + "images/arcs/reality-refuge.png",
      },
      {
        id: ArcIds.ShinyDays,
        name: "Shiny Days",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Liquid,
        baseATK80: 475,
        substat: Stats.ATK,
        substat80: "25%",
        image: BASE_URL + "images/arcs/shiny-days.png",
      },
      {
        id: ArcIds.SongOfTheWhale,
        name: "Песня кита",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Plasma,
        baseATK80: 512,
        substat: Stats.ATK,
        substat80: "27.5%",
        effect: {
          title: "Глубокая тоска",
          text: "Увеличивает атаку на 12.00%.\nУвеличивает урон владельца по сломленным врагам на 12.00%. Восстанавливает владельцу 30.00% ОЗ после победы над сломленным врагом. Запускается не чаще одного раза в 30 сек.",
        },
        image: BASE_URL + "images/arcs/song-of-the-whale.png",
      },
      {
        id: ArcIds.StellarVeil,
        name: "Stellar Veil",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Plasma,
        baseATK80: 512,
        substat: Stats.ATK,
        substat80: "27.5%",
        image: BASE_URL + "images/arcs/stellar-veil.png",
      },
      {
        id: ArcIds.TearsBeneathTheMask,
        name: "Tears Beneath the Mask",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Gas,
        baseATK80: 512,
        substat: Stats.ATK,
        substat80: "27.5%",
        image: BASE_URL + "images/arcs/tears-beneath-the-mask.png",
      },
      {
        id: ArcIds.TheFoolsSpring,
        name: "Ложная весна",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Synthesis,
        baseATK80: 395,
        substat: Stats.DEF,
        substat80: "52.5%",
        effect: {
          title: "Живая фаланга",
          text: "Увеличивает атаку на 18.00%, когда у владельца есть щит.",
        },
        image: BASE_URL + "images/arcs/the-fools-spring.png",
      },
      {
        id: ArcIds.TheForgotten,
        name: "The Forgotten",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Solid,
        baseATK80: 475,
        substat: Stats.HP,
        substat80: "25%",
        image: BASE_URL + "images/arcs/the-forgotten.png",
      },
      {
        id: ArcIds.TheGoodTheBadTheBitter,
        name: "The Good, The Bad, The Bitter",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Synthesis,
        baseATK80: 475,
        substat: Stats.HP,
        substat80: "25%",
        image: BASE_URL + "images/arcs/the-good-the-bad-the-bitter.png",
      },
      {
        id: ArcIds.TheGreatThief,
        name: "The Great Thief",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Synthesis,
        baseATK80: 475,
        substat: "Break Intensity",
        substat80: 120,
        // image: BASE_URL + "images/arcs/",
      },
      {
        id: ArcIds.TheLastRose,
        name: "The Last Rose",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Liquid,
        baseATK80: 570,
        substat: Stats.CRIT_RATE,
        substat80: "24%",
        // image: BASE_URL + "images/arcs/",
      },
      {
        id: ArcIds.TheRainThatShookTheWorld,
        name: "The Rain That Shook the World",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Solid,
        baseATK80: 512,
        substat: Stats.CRIT_RATE,
        substat80: "22%",
        image: BASE_URL + "images/arcs/the-rain-that-shook-the-world.png",
      },
      {
        id: ArcIds.TimeBandit,
        name: "Time Bandit",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Solid,
        baseATK80: 475,
        substat: Stats.HP,
        substat80: "25%",
        // image: BASE_URL + "images/arcs/",
      },
      {
        id: ArcIds.Umbrella,
        name: "Зонтик",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Synthesis,
        baseATK80: 395,
        substat: Stats.DEF,
        substat80: "52.5%",
        effect: {
          title: "Человек дождя",
          text: "Увеличивает ОЗ на 10.00%.\nУсиливает щиты на 10.00%, когда ОЗ владельца выше 50 %.",
        },
        image: BASE_URL + "images/arcs/umbrella.png",
      },
      {
        id: ArcIds.Us,
        name: "Us.",
        rankId: RankIds.B,
        typeId: ArcTypeIds.Plasma,
        baseATK80: 380,
        substat: Stats.ATK,
        substat80: "20%",
        image: BASE_URL + "images/arcs/us.png",
      },
      {
        id: ArcIds.WatchYourHeads,
        name: "Берегите головы!",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Gas,
        baseATK80: 475,
        substat: Stats.CRIT_DMG,
        substat80: "40%",
        effect: {
          title: "Призрачный змей",
          text: "Увеличивает атаку на 10.00% и урон лакшаны по целям, пораженным Реморой и Следом, на 10.00% на 15 сек., когда владелец применяет навык перенаправления. Эффект не складывается.",
        },
        image: BASE_URL + "images/arcs/watch-your-heads.png",
      },
      {
        id: ArcIds.YourHappinessIsPriceless,
        name: "Your Happiness is Priceless",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Solid,
        baseATK80: 512,
        substat: Stats.DEF,
        substat80: "38.5%",
        image: BASE_URL + "images/arcs/your-happiness-is-priceless.png",
      },
      {
        id: ArcIds.YouthfulFantasy,
        name: "Youthful Fantasy",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Liquid,
        baseATK80: 570,
        substat: Stats.ATK,
        substat80: "30%",
        image: BASE_URL + "images/arcs/youthful-fantasy.png",
      },
    ],
    transformList: item => item,
  },
  "cartridges": {
    data: [
      {
        id: CartridgeIds.CrimsonTwinButterflies,
        name: "Багрянец: Две бабочки",
        requiredModuleIds: [ModuleIds.I2, ModuleIds.I3R, ModuleIds.J, ModuleIds.S],
        setEffects: {
          2: "Урон от чар +10 %.",
          4: "Когда враги поблизости получают урон от чар от команды, увеличивает атаку владельца на 6 %. Складывается до 6 раз, каждый уровень действует 10 сек. Эффект остается активным, когда персонаж не на поле боя.",
        },
        image: BASE_URL + "images/cartridges/crimson-twin-butterflies.png",
      },
      {
        id: CartridgeIds.DevilsBloodCurse,
        name: "Кровь демона: Проклятие",
        requiredModuleIds: [ModuleIds.I2, ModuleIds.I3, ModuleIds.JR, ModuleIds.SR],
        setEffects: {
          2: "Урон психики +10 %.",
          4: "Увеличивает урон владельца на 18 %. Бонус повышается до 36 % против врагов, поражённых Новой или Следом.",
        },
        image: BASE_URL + "images/cartridges/devils-blood-curse.png",
      },
      {
        id: CartridgeIds.Diabolos,
        name: "Диабло",
        requiredModuleIds: [ModuleIds.I2, ModuleIds.JR, ModuleIds.J, ModuleIds.I4R],
        setEffects: {
          2: "Урон хаоса +10 %.",
          4: "Игнорирует 12 % сопротивления хаосу у противников. Игнорирует 24 % сопротивления хаосу у противников в течение 20 сек. после того, как владелец участвует в реакциях «Нова» или «Ожог».",
        },
        image: BASE_URL + "images/cartridges/diabolos.png",
      },
      {
        id: CartridgeIds.FirefliesAndTheForest,
        name: "Светлячки и лес",
        requiredModuleIds: [ModuleIds.I2R, ModuleIds.I3, ModuleIds.L, ModuleIds.SR],
        setEffects: {
          2: "Урон анимы +10 %.",
          4: "Когда враги поблизости получают урон анимы от команды, увеличивает крит. урон владельца на 8 %. Складывается до 7 раз, каждый уровень действует 10 сек. Эффект остаётся активным, когда персонаж не на поле боя.",
        },
        image: BASE_URL + "images/cartridges/fireflies-and-the-forest.png",
      },
      {
        id: CartridgeIds.KingdomsGuard,
        name: "Королевский страж",
        requiredModuleIds: [ModuleIds.I3R, ModuleIds.I3, ModuleIds.LR, ModuleIds.J],
        setEffects: {
          2: "Защита +15 %.",
          4: "Увеличивает прочность щитов владельца на 20 %.",
        },
        image: BASE_URL + "images/cartridges/kingdoms-guard.png",
      },
      {
        id: CartridgeIds.LostRadiance,
        name: "Утраченное сияние",
        requiredModuleIds: [ModuleIds.I2R, ModuleIds.L, ModuleIds.LR, ModuleIds.I4],
        setEffects: {
          2: "Урон космоса +10 %.",
          4: "После применения владельцем сверхспособности игнорирует 25 % защита врагов в течение 20 сек. Эффект не складывается.",
        },
        image: BASE_URL + "images/cartridges/lost-radiance.png",
      },
      {
        id: CartridgeIds.QuietManor,
        name: "Тихое поместье",
        requiredModuleIds: [ModuleIds.I2R, ModuleIds.I2, ModuleIds.I4, ModuleIds.SR],
        setEffects: {
          2: "Ментальный урон +10 %.",
          4: "Даёт владельцу бонус к ментальному урону в 12 % за каждую базовую атаку, складывается до 3 раз. Каждый уровень действует 6 сек.",
        },
        image: BASE_URL + "images/cartridges/quiet-manor.png",
      },
      {
        id: CartridgeIds.ShadowCreed,
        name: "Кредо теней",
        requiredModuleIds: [ModuleIds.I2R, ModuleIds.I2, ModuleIds.I4R, ModuleIds.SR],
        setEffects: {
          2: "Атака +10 %.",
          4: "После применения навыка увеличивает атаку владельца на 25 % на 20 сек.",
        },
        image: BASE_URL + "images/cartridges/shadow-creed.png",
      },
      {
        id: CartridgeIds.SpeedyHedgehog,
        name: "Скоростной ёж",
        requiredModuleIds: [ModuleIds.L, ModuleIds.JR, ModuleIds.LR, ModuleIds.J],
        setEffects: {
          2: "Скорость зарядки +12 %.",
          4: "После применения владельцем сверхспособности увеличивает атаку всех союзников на 15 % на 20 сек. Эффект не складывается.",
        },
        image: BASE_URL + "images/cartridges/speedy-hedgehog.png",
      },
      {
        id: CartridgeIds.StreetBoxer,
        name: "Уличный боец",
        requiredModuleIds: [ModuleIds.I2R, ModuleIds.I3R, ModuleIds.LR, ModuleIds.S],
        setEffects: {
          2: "Урон лакшаны +10 %.",
          4: "Увеличивает шанс критического удара владельца на 14 %. При срабатывании Реморы или Следа от действий команды бонус увеличивается до 14 % на 20 сек.",
        },
        image: BASE_URL + "images/cartridges/street-boxer.png",
      },
      {
        id: CartridgeIds.TheasNightTavern,
        name: "Ночная таверна Теи",
        requiredModuleIds: [ModuleIds.I3R, ModuleIds.I3, ModuleIds.L, ModuleIds.JR],
        setEffects: {
          2: "ОЗ +10 %.",
          4: "Увеличивает бонус к лечению владельца на 20 %.",
        },
        image: BASE_URL + "images/cartridges/theas-night-tavern.png",
      },
      {
        id: CartridgeIds.TinyBigAdventure,
        name: "Мини-мега приключение",
        requiredModuleIds: [ModuleIds.I2R, ModuleIds.I2, ModuleIds.I4R, ModuleIds.S],
        setEffects: {
          2: "ОЗ +10 %.",
          4: "Увеличивает макс. ОЗ владельца на 4 % при получении урона. Складывается до 10 раз, каждый уровень действует 10 сек. Применение сверхспособности немедленно дает 10 уровней.",
        },
        image: BASE_URL + "images/cartridges/tiny-big-adventure.png",
      },
    ],
    transformList: item => item,
  },
  "character-roles": {
    data: [
      { id: CharacterRoleIds.Buff, name: "Усиление", image: BASE_URL + "images/character-roles/buff.png" },
      { id: CharacterRoleIds.Damage, name: "Урон", image: BASE_URL + "images/character-roles/damage.png" },
      { id: CharacterRoleIds.Survival, name: "Выживание", image: BASE_URL + "images/character-roles/survival.png" },
    ],
    transformList: item => item,
  },
  "characters": {
    data: [
      {
        id: CharacterIds.Adler,
        name: "Адлер",
        rankId: RankIds.A,
        elementId: ElementIds.Incantation,
        arcTypeId: ArcTypeIds.Synthesis,
        roleId: CharacterRoleIds.Survival,
        version: "1.0",
        image: BASE_URL + "images/characters/adler.png",
        imageWithElementAndRank: BASE_URL + "images/characters/adler-with-element-and-rank.png",
        awakeningSkills: {
          1: "Форма",
          2: "Чувство",
          3: "",
          4: "",
          5: "",
          6: "Все формы пусты",
        },
        skills: {
          BasicAttack: "Избавление",
          Skill: "Проклятие зла",
          Ultimate: "Спокойствие",
          SupportSkill: "",
        },
      },
      {
        id: CharacterIds.Aurelia,
        name: "Аурелия",
        rankId: RankIds.A,
        elementId: ElementIds.Psyche,
        arcTypeId: ArcTypeIds.Plasma,
        roleId: CharacterRoleIds.Damage,
        version: "1.0",
        image: BASE_URL + "images/characters/aurelia.png",
        imageWithElementAndRank: BASE_URL + "images/characters/aurelia-with-element-and-rank.png",
      },
      {
        id: CharacterIds.Baicang,
        name: "Байканг",
        rankId: RankIds.S,
        elementId: ElementIds.Incantation,
        arcTypeId: ArcTypeIds.Synthesis,
        roleId: CharacterRoleIds.Damage,
        version: "1.0",
        image: BASE_URL + "images/characters/baicang.png",
        imageWithElementAndRank: BASE_URL + "images/characters/baicang-with-element-and-rank.png",
        awakeningSkills: {
          1: "Эй, капитан!",
          2: "Зов души",
          3: "Осуществленные проклятия",
          4: "",
          5: "В честь лунного света",
          6: "Белый аспект",
        },
        skills: {
          BasicAttack: "Слово и действие",
          Skill: "Щедрое руководство",
          Ultimate: "Суд осени",
          SupportSkill: "Перерыв окончен",
        },
      },
      {
        id: CharacterIds.Chaos,
        name: "Chaos",
        rankId: RankIds.S,
        elementId: ElementIds.Lakshana,
        version: "1.1",
        image: BASE_URL + "images/characters/chaos.png",
      },
      {
        id: CharacterIds.Chiz,
        name: "Чиз",
        rankId: RankIds.S,
        elementId: ElementIds.Cosmos,
        arcTypeId: ArcTypeIds.Gas,
        roleId: CharacterRoleIds.Damage,
        version: "1.0",
        image: BASE_URL + "images/characters/chiz.png",
        imageWithElementAndRank: BASE_URL + "images/characters/chiz-with-element-and-rank.png",
        awakeningSkills: {
          1: "Солнце, у тебе взываю!",
          2: "Фейерверки в тишине",
          3: "Если бы не было дождливых дней",
          4: "Онигири, бинты и фонс",
          5: "Пустые страницы дневника",
          6: "Тридцать три дня",
        },
        skills: {
          BasicAttack: "Меч изгнанника",
          Skill: "Навык",
          Ultimate: "Сверхспособность",
          SupportSkill: "",
        },
      },
      {
        id: CharacterIds.Daffodill,
        name: "Даффодил",
        rankId: RankIds.S,
        elementId: ElementIds.Chaos,
        arcTypeId: ArcTypeIds.Liquid,
        roleId: CharacterRoleIds.Damage,
        version: "1.0",
        image: BASE_URL + "images/characters/daffodill.png",
        imageWithElementAndRank: BASE_URL + "images/characters/daffodill-with-element-and-rank.png",
      },
      {
        id: CharacterIds.Edgar,
        name: "Эдгар",
        rankId: RankIds.A,
        elementId: ElementIds.Cosmos,
        arcTypeId: ArcTypeIds.Liquid,
        roleId: CharacterRoleIds.Survival,
        version: "1.0",
        image: BASE_URL + "images/characters/edgar.png",
        imageWithElementAndRank: BASE_URL + "images/characters/edgar-with-element-and-rank.png",
      },
      {
        id: CharacterIds.EsperZero,
        name: "Нулевой эспер",
        rankId: RankIds.S,
        elementId: ElementIds.Cosmos,
        arcTypeId: ArcTypeIds.Solid,
        roleId: CharacterRoleIds.Damage,
        version: "1.0",
        image: BASE_URL + "images/characters/esper-zero.png",
        imageWithElementAndRank: BASE_URL + "images/characters/esper-zero-with-element-and-rank.png",
        awakeningSkills: {
          1: "Цветущий взгляд",
          2: "В поисках признания",
          3: "Записи об аномалиях",
          4: "Неопределённые факторы",
          5: "Теопнеустос",
          6: "Обманчивое освобождение",
        },
        skills: {
          BasicAttack: "Оценка",
          Skill: "Оценка и гравировка",
          Ultimate: "Деление на ноль",
          SupportSkill: "Цветение разлома",
        },
      },
      {
        id: CharacterIds.Fadia,
        name: "Фадия",
        rankId: RankIds.S,
        elementId: ElementIds.Psyche,
        arcTypeId: ArcTypeIds.Synthesis,
        roleId: CharacterRoleIds.Survival,
        version: "1.0",
        image: BASE_URL + "images/characters/fadia.png",
        imageWithElementAndRank: BASE_URL + "images/characters/fadia-with-element-and-rank.png",
        awakeningSkills: {
          1: "Отступник",
          2: "Инстинкт",
          3: "Проклятие благословений",
          4: "Нарушитель табу",
          5: "Выживание в смерти",
          6: "Несущий любовь и смерть",
        },
        skills: {
          BasicAttack: "Безмолвный отказ",
          Skill: "Существование",
          Ultimate: "От агонии к эйфории",
          SupportSkill: "Аутсайдер",
        },
      },
      {
        id: CharacterIds.Haniel,
        name: "Ханиэль",
        rankId: RankIds.A,
        elementId: ElementIds.Psyche,
        arcTypeId: ArcTypeIds.Solid,
        roleId: CharacterRoleIds.Buff,
        version: "1.0",
        image: BASE_URL + "images/characters/haniel.png",
        imageWithElementAndRank: BASE_URL + "images/characters/haniel-with-element-and-rank.png",
      },
      {
        id: CharacterIds.Hathor,
        name: "Хатор",
        rankId: RankIds.S,
        elementId: ElementIds.Lakshana,
        arcTypeId: ArcTypeIds.Plasma,
        roleId: CharacterRoleIds.Damage,
        version: "1.0",
        image: BASE_URL + "images/characters/hathor.png",
        imageWithElementAndRank: BASE_URL + "images/characters/hathor-with-element-and-rank.png",
        awakeningSkills: {
          1: "Элитный курьер",
          2: "Царство шипов",
          3: "Потерянные крылья",
          4: "Резонанс двигателя",
          5: "Обычный сэндвич",
          6: "Руководство по повседневной жизни",
        },
        skills: {
          BasicAttack: "Быстрая доставка",
          Skill: "Воздушное командование",
          Ultimate: "Быстрый скакун",
          SupportSkill: "Выбор точки воздействия",
        },
      },
      {
        id: CharacterIds.Hotori,
        name: "Хотори",
        rankId: RankIds.S,
        elementId: ElementIds.Cosmos,
        arcTypeId: ArcTypeIds.Solid,
        roleId: CharacterRoleIds.Buff,
        version: "1.0",
        image: BASE_URL + "images/characters/hotori.png",
        imageWithElementAndRank: BASE_URL + "images/characters/hotori-with-element-and-rank.png",
      },
      {
        id: CharacterIds.Jiuyuan,
        name: "Цзююань",
        rankId: RankIds.S,
        elementId: ElementIds.Anima,
        arcTypeId: ArcTypeIds.Solid,
        roleId: CharacterRoleIds.Damage,
        version: "1.0",
        image: BASE_URL + "images/characters/jiuyuan.png",
        imageWithElementAndRank: BASE_URL + "images/characters/jiuyuan-with-element-and-rank.png",
      },
      {
        id: CharacterIds.Lacrimosa,
        name: "Lacrimosa",
        rankId: RankIds.S,
        elementId: ElementIds.Chaos,
        arcTypeId: ArcTypeIds.Liquid,
        roleId: CharacterRoleIds.Damage,
        version: "1.1",
        image: BASE_URL + "images/characters/lacrimosa.png",
      },
      {
        id: CharacterIds.Mint,
        name: "Минт",
        rankId: RankIds.A,
        elementId: ElementIds.Anima,
        arcTypeId: ArcTypeIds.Liquid,
        roleId: CharacterRoleIds.Damage,
        version: "1.0",
        image: BASE_URL + "images/characters/mint.png",
        imageWithElementAndRank: BASE_URL + "images/characters/mint-with-element-and-rank.png",
      },
      {
        id: CharacterIds.Nanally,
        name: "Наналли",
        rankId: RankIds.S,
        elementId: ElementIds.Anima,
        arcTypeId: ArcTypeIds.Plasma,
        roleId: CharacterRoleIds.Damage,
        version: "1.0",
        image: BASE_URL + "images/characters/nanally.png",
        imageWithElementAndRank: BASE_URL + "images/characters/nanally-with-element-and-rank.png",
        awakeningSkills: {
          1: "Сбор банды",
          2: "Второй член",
          3: "",
          4: "",
          5: "",
          6: "",
        },
        skills: {
          BasicAttack: "Тайный навык Колуччи",
          Skill: "Техника воя Колуччи",
          Ultimate: "Ультимативная техника Колуччи",
          SupportSkill: "Правосудие свыше",
        },
      },
      {
        id: CharacterIds.Sakiri,
        name: "Сакири",
        rankId: RankIds.S,
        elementId: ElementIds.Incantation,
        arcTypeId: ArcTypeIds.Gas,
        roleId: CharacterRoleIds.Buff,
        version: "1.0",
        image: BASE_URL + "images/characters/sakiri.png",
        imageWithElementAndRank: BASE_URL + "images/characters/sakiri-with-element-and-rank.png",
        awakeningSkills: {
          1: "",
          2: "",
          3: "",
          4: "Жажда уверенности",
          5: "Перегрузка чувств",
          6: "Обжорное распутство",
        },
        skills: {
          BasicAttack: "",
          Skill: "Поглощение целиком",
          Ultimate: "Праздник обжорства",
          SupportSkill: "",
        },
      },
      {
        id: CharacterIds.Skia,
        name: "Ския",
        rankId: RankIds.A,
        elementId: ElementIds.Lakshana,
        arcTypeId: ArcTypeIds.Gas,
        roleId: CharacterRoleIds.Damage,
        version: "1.0",
        image: BASE_URL + "images/characters/skia.png",
        imageWithElementAndRank: BASE_URL + "images/characters/skia-with-element-and-rank.png",
      },
    ],
    transformList: item => item,
  },
  "characters-build-guide": {
    data: [
      {
        id: CharacterIds.Adler,
        recommendedArcs: [{ id: ArcIds.TheFoolsSpring }, { id: ArcIds.Umbrella }, { id: ArcIds.ATimeWillCome }],
        recommendedCartridges: [{ id: CartridgeIds.KingdomsGuard }],
        cartridgeBestMainStat: [Stats.DEF_PERCENTAGE],
        bestSubStats: [
          { value: Stats.DEF_PERCENTAGE, priority: 1 },
          { value: Stats.DMG, priority: 1 },
          { value: Stats.CYCLE_INTENSITY, priority: 2 },
          { value: Stats.CRIT_RATE, priority: 2 },
          { value: Stats.CRIT_DMG, priority: 3 },
        ],
        recommendedAwakeningSkills: {
          1: { priority: 1 },
          2: { priority: 2 },
          6: { priority: 3 },
          5: { priority: 4 },
          4: { priority: 5 },
          3: { priority: 6 },
        },
        recommendedSkills: {
          Skill: { priority: 1 },
          Ultimate: { priority: 2 },
          BasicAttack: { priority: 3 },
          SupportSkill: { priority: 4 },
        },
        bestTeams: [
          {
            title: "Burst Bossing Team",
            slot1: [CharacterIds.Nanally],
            slot2: [CharacterIds.Daffodill],
            slot3: [CharacterIds.Fadia],
            slot4: [CharacterIds.Adler],
          },
          {
            title: "Hexed-Scorched Team",
            slot1: [CharacterIds.Adler],
            slot2: [CharacterIds.Lacrimosa],
            slot3: [CharacterIds.Jiuyuan],
            slot4: [CharacterIds.Sakiri],
          },
          {
            title: "Discord Team",
            slot1: [CharacterIds.Baicang],
            slot2: [CharacterIds.Daffodill],
            slot3: [CharacterIds.Adler],
            slot4: [CharacterIds.Haniel],
          },
        ],
        videoSourceIds: [VideoSourceIds.IceINFERN0_guide_Adler_v_1_0, VideoSourceIds.IceINFERN0_Umbrella_or_TheFoolsSpring_on_Adler],
      },
      {
        id: CharacterIds.Baicang,
        recommendedArcs: [{ id: ArcIds.CamelliaSociety }, { id: ArcIds.FluffOfFerocity }, { id: ArcIds.ATimeWillCome }],
        recommendedCartridges: [{ id: CartridgeIds.CrimsonTwinButterflies }],
        cartridgeBestMainStat: [Stats.CRIT_DMG, Stats.INCANTATION_DMG_BONUS],
        bestSubStats: [
          { value: Stats.CRIT_DMG, priority: 1 },
          { value: Stats.CRIT_RATE, priority: 1 },
          { value: Stats.DMG, priority: 2 },
          { value: Stats.ATK, priority: 2 },
          { value: Stats.CYCLE_INTENSITY, priority: 3 },
        ],
        recommendedAwakeningSkills: {
          2: { priority: 1 },
          6: { priority: 2 },
          5: { priority: 3 },
          1: { priority: 4 },
          3: { priority: 5 },
          4: { priority: 6 },
        },
        recommendedSkills: {
          Skill: { priority: 1 },
          Ultimate: { priority: 2 },
          BasicAttack: { priority: 3 },
          SupportSkill: { priority: 4 },
        },
        bestTeams: [
          {
            title: "Выжженное проклятие",
            slot1: [CharacterIds.Baicang],
            slot2: [CharacterIds.Daffodill],
            slot3: [CharacterIds.Sakiri],
            slot4: [CharacterIds.Jiuyuan],
          },
          {
            title: "Раздор",
            slot1: [CharacterIds.Baicang],
            slot2: [CharacterIds.Daffodill],
            slot3: [CharacterIds.Aurelia],
            slot4: [CharacterIds.Haniel],
          },
          {
            title: "Смешанная команда",
            slot1: [CharacterIds.Baicang],
            slot2: [CharacterIds.Lacrimosa],
            slot3: [CharacterIds.Sakiri],
            slot4: [CharacterIds.Haniel],
          },
        ],
        videoSourceIds: [VideoSourceIds.IceINFERN0_guide_Baicang_v_1_0],
      },
      {
        id: CharacterIds.Chiz,
        recommendedArcs: [{ id: ArcIds.ContemplativeCat }],
        recommendedCartridges: [{ id: CartridgeIds.LostRadiance }, { id: CartridgeIds.ShadowCreed }],
        cartridgeBestMainStat: [Stats.CRIT_RATE, Stats.CRIT_DMG, Stats.COSMOS_DMG_BONUS],
        bestSubStats: [
          { value: Stats.CRIT_DMG, priority: 1 },
          { value: Stats.CRIT_RATE, priority: 1 },
          { value: Stats.DMG, priority: 2 },
          { value: Stats.ATK, priority: 2 },
          { value: Stats.CYCLE_INTENSITY, priority: 3 },
        ],
        recommendedAwakeningSkills: {
          2: { priority: 1 },
          4: { priority: 2 },
          1: { priority: 3 },
          5: { priority: 4 },
          3: { priority: 5 },
          6: { priority: 6 },
        },
        recommendedSkills: {
          Skill: { priority: 1 },
          Ultimate: { priority: 2 },
          BasicAttack: { priority: 3 },
          SupportSkill: { priority: 4 },
        },
        bestTeams: [
          {
            title: "Премиум пачка",
            slot1: [CharacterIds.Chiz],
            slot2: [CharacterIds.EsperZero],
            slot3: [CharacterIds.Jiuyuan],
            slot4: [CharacterIds.Hathor],
          },
          {
            title: "Бюджет пачка",
            slot1: [CharacterIds.Chiz],
            slot2: [CharacterIds.Mint],
            slot3: [CharacterIds.Hathor],
            slot4: [CharacterIds.Haniel],
          },
          {
            title: "Танковый каток",
            slot1: [CharacterIds.Chiz],
            slot2: [CharacterIds.Fadia],
            slot3: [CharacterIds.Daffodill],
            slot4: [CharacterIds.Haniel],
          },
        ],
        videoSourceIds: [VideoSourceIds.IceINFERN0_guide_Chiz_v_1_0],
      },
      {
        id: CharacterIds.EsperZero,
        recommendedArcs: [{ id: ArcIds.HethereausKeeper }, { id: ArcIds.DayOff }],
        recommendedCartridges: [{ id: CartridgeIds.LostRadiance }],
        cartridgeBestMainStat: [Stats.CRIT_RATE, Stats.CYCLE_INTENSITY],
        bestSubStats: [
          { value: Stats.CRIT_DMG, priority: 1 },
          { value: Stats.CRIT_RATE, priority: 1 },
          { value: Stats.CYCLE_INTENSITY, priority: 2 },
          { value: Stats.DMG, priority: 2 },
          { value: Stats.ATK_PERCENTAGE, priority: 3 },
        ],
        recommendedAwakeningSkills: {
          2: { priority: 1 },
          3: { priority: 2 },
          4: { priority: 3 },
          5: { priority: 4 },
          6: { priority: 5 },
          1: { priority: 6 },
        },
        recommendedSkills: {
          Skill: { priority: 1 },
          Ultimate: { priority: 2 },
          BasicAttack: { priority: 3 },
          SupportSkill: { priority: 4 },
        },
        bestTeams: [
          {
            title: "1",
            slot1: [CharacterIds.EsperZero],
            slot2: [CharacterIds.Nanally],
            slot3: [CharacterIds.Hathor],
            slot4: [CharacterIds.Fadia],
          },
          {
            title: "2",
            slot1: [CharacterIds.EsperZero],
            slot2: [CharacterIds.Mint],
            slot3: [CharacterIds.Skia],
            slot4: [CharacterIds.Fadia],
          },
        ],
        videoSourceIds: [VideoSourceIds.IceINFERN0_guide_EsperZero_v_1_0],
      },
      {
        id: CharacterIds.Fadia,
        recommendedArcs: [{ id: ArcIds.EternalWaltz }, { id: ArcIds.Umbrella }],
        recommendedCartridges: [{ id: CartridgeIds.TinyBigAdventure }],
        cartridgeBestMainStat: [Stats.HP_PERCENTAGE],
        bestSubStats: [
          { value: Stats.HP_PERCENTAGE, priority: 1 },
          { value: Stats.HP, priority: 2 },
          { value: Stats.DMG_PERCENTAGE, priority: 3 },
          { value: Stats.BREAK_INTENSITY, priority: 4 },
        ],
        recommendedAwakeningSkills: {
          1: { priority: 1 },
          2: { priority: 2 },
          6: { priority: 3 },
          3: { priority: 4 },
          4: { priority: 5 },
          5: { priority: 6 },
        },
        recommendedSkills: {
          Ultimate: { priority: 1 },
          Skill: { priority: 2 },
          BasicAttack: { priority: 3 },
          SupportSkill: { priority: 4 },
        },
        bestTeams: [
          {
            title: "Бессмертная команда",
            slot1: [CharacterIds.Fadia],
            slot2: [CharacterIds.Daffodill],
            slot3: [CharacterIds.Adler],
            slot4: [CharacterIds.Nanally],
          },
          {
            title: "Команда поджога",
            slot1: [CharacterIds.Fadia],
            slot2: [CharacterIds.Daffodill],
            slot3: [CharacterIds.Sakiri],
            slot4: [CharacterIds.Baicang],
          },
          {
            title: "Тройная Нова Аурелии",
            slot1: [CharacterIds.Fadia],
            slot2: [CharacterIds.Aurelia],
            slot3: [CharacterIds.Haniel],
            slot4: [CharacterIds.Daffodill],
          },
        ],
        videoSourceIds: [VideoSourceIds.IceINFERN0_guide_Fadia_v_1_0],
      },
      {
        id: CharacterIds.Hathor,
        recommendedArcs: [{ id: ArcIds.RagingFlames }, { id: ArcIds.FluffOfFortitude }, { id: ArcIds.SongOfTheWhale }, { id: ArcIds.DrawnBlade }],
        recommendedCartridges: [{ id: CartridgeIds.StreetBoxer }],
        cartridgeBestMainStat: [Stats.ATK_PERCENTAGE, Stats.CRIT_RATE, Stats.CRIT_DMG, Stats.LAKSHANA_DMG_BONUS],
        bestSubStats: [
          { value: Stats.CRIT_RATE, priority: 1 },
          { value: Stats.CRIT_DMG, priority: 2 },
          { value: Stats.ATK_PERCENTAGE, priority: 3 },
          { value: Stats.ATK, priority: 4 },
        ],
        recommendedAwakeningSkills: {
          1: { priority: 1 },
          2: { priority: 2 },
          6: { priority: 3 },
          5: { priority: 4 },
          4: { priority: 5 },
          3: { priority: 6 },
        },
        recommendedSkills: {
          Skill: { priority: 1 },
          Ultimate: { priority: 2 },
          BasicAttack: { priority: 3 },
        },
        bestTeams: [
          {
            title: "Премиум-команда",
            slot1: [CharacterIds.Hathor],
            slot2: [CharacterIds.Hotori],
            slot3: [CharacterIds.Nanally],
            slot4: [CharacterIds.Fadia],
          },
          {
            title: "Альтернативный Заряд",
            slot1: [CharacterIds.Hathor],
            slot2: [CharacterIds.EsperZero],
            slot3: [CharacterIds.Jiuyuan, CharacterIds.Nanally],
            slot4: [CharacterIds.Fadia, CharacterIds.Haniel],
          },
          {
            title: "Бюджетный отряд",
            slot1: [CharacterIds.Hathor],
            slot2: [CharacterIds.EsperZero],
            slot3: [CharacterIds.Mint],
            slot4: [CharacterIds.Haniel, CharacterIds.Aurelia],
          },
        ],
        videoSourceIds: [VideoSourceIds.IceINFERN0_guide_Hathor_v_1_0],
      },
      {
        id: CharacterIds.Nanally,
        recommendedArcs: [{ id: ArcIds.ReadyReady }, { id: ArcIds.FluffOfFortitude }, { id: ArcIds.SongOfTheWhale }, { id: ArcIds.Oraora }],
        recommendedCartridges: [{ id: CartridgeIds.FirefliesAndTheForest }],
        cartridgeBestMainStat: [Stats.CRIT_DMG, Stats.ANIMA_DMG_BONUS],
        bestSubStats: [
          { value: Stats.CRIT_DMG, priority: 1 },
          { value: Stats.CRIT_RATE, priority: 1 },
          { value: Stats.DMG, priority: 2 },
          { value: Stats.ATK, priority: 2 },
          { value: Stats.CYCLE_INTENSITY, priority: 3 },
        ],
        recommendedAwakeningSkills: {
          1: { priority: 1 },
          2: { priority: 2 },
        },
        recommendedSkills: {
          BasicAttack: { priority: 1 },
          Ultimate: { priority: 2 },
          Skill: { priority: 2 },
          SupportSkill: { priority: 3 },
        },
        bestTeams: [{
          title: "Nanally Blossom-Hexed Team",
          slot1: [CharacterIds.Nanally],
          slot2: [CharacterIds.EsperZero],
          slot3: [CharacterIds.Sakiri, CharacterIds.Haniel],
          slot4: [CharacterIds.Adler, CharacterIds.Jiuyuan],
        }],
        videoSourceIds: [VideoSourceIds.IceINFERN0_guide_Nanally_v_1_0],
      },
      {
        id: CharacterIds.Sakiri,
        recommendedArcs: [{ id: ArcIds.GoodBoysGrandAdventure }, { id: ArcIds.WatchYourHeads }],
        recommendedCartridges: [{ id: CartridgeIds.SpeedyHedgehog }, { id: CartridgeIds.ShadowCreed }, { id: CartridgeIds.CrimsonTwinButterflies }],
        cartridgeBestMainStat: [Stats.CYCLE_INTENSITY, Stats.INCANTATION_DMG_BONUS],
        bestSubStats: [
          { value: Stats.CYCLE_INTENSITY, priority: 1 },
          { value: Stats.BREAK_INTENSITY, priority: 2 },
          { value: Stats.DMG, priority: 2 },
          { value: Stats.ATK_PERCENTAGE, priority: 2 },
          { value: Stats.ATK, priority: 3 },
        ],
        recommendedAwakeningSkills: {
          4: { priority: 1 },
          5: { priority: 2 },
          6: { priority: 3 },
        },
        recommendedSkills: { Skill: { priority: 1 }, Ultimate: { priority: 2 } },
        bestTeams: [{
          title: "",
          slot1: [CharacterIds.Nanally],
          slot2: [CharacterIds.EsperZero],
          slot3: [CharacterIds.Sakiri],
          slot4: [CharacterIds.Adler],
        }],
        videoSourceIds: [VideoSourceIds.IceINFERN0_guide_Sakiri_v_1_0],
      },
    ],
    transformList: ({ id }) => ({ id }),
  },
  "elements": {
    data: [
      { id: ElementIds.Anima, name: "Анима", image: BASE_URL + "images/elements/anima.png" },
      { id: ElementIds.Chaos, name: "Хаос", image: BASE_URL + "images/elements/chaos.png" },
      { id: ElementIds.Cosmos, name: "Космос", image: BASE_URL + "images/elements/cosmos.png" },
      { id: ElementIds.Incantation, name: "Чары", image: BASE_URL + "images/elements/incantation.png" },
      { id: ElementIds.Lakshana, name: "Лакшана", image: BASE_URL + "images/elements/lakshana.png" },
      { id: ElementIds.Psyche, name: "Психика", image: BASE_URL + "images/elements/psyche.png" },
    ],
    transformList: item => item,
  },
  "modules": {
    data: [
      { id: ModuleIds.I2, type: 2, image: BASE_URL + "images/modules/i2.png" },
      { id: ModuleIds.I2R, type: 2, image: BASE_URL + "images/modules/i2-r.png" },
      { id: ModuleIds.I3, type: 3, image: BASE_URL + "images/modules/i3.png" },
      { id: ModuleIds.I3R, type: 3, image: BASE_URL + "images/modules/i3-r.png" },
      { id: ModuleIds.I4, type: 4, image: BASE_URL + "images/modules/i4.png" },
      { id: ModuleIds.I4R, type: 4, image: BASE_URL + "images/modules/i4-r.png" },
      { id: ModuleIds.J, type: 3, image: BASE_URL + "images/modules/j.png" },
      { id: ModuleIds.JR, type: 3, image: BASE_URL + "images/modules/j-r.png" },
      { id: ModuleIds.L, type: 3, image: BASE_URL + "images/modules/l.png" },
      { id: ModuleIds.LR, type: 3, image: BASE_URL + "images/modules/l-r.png" },
      { id: ModuleIds.S, type: 4, image: BASE_URL + "images/modules/s.png" },
      { id: ModuleIds.SR, type: 4, image: BASE_URL + "images/modules/s-r.png" },
    ],
    transformList: item => item,
  },
  "ranks": {
    data: [
      { id: RankIds.A, name: "A", image: BASE_URL + "images/ranks/a.png" },
      { id: RankIds.B, name: "B", image: BASE_URL + "images/ranks/b.png" },
      { id: RankIds.S, name: "S", image: BASE_URL + "images/ranks/s.png" },
    ],
    transformList: item => item,
  },
  "video-sources": {
    data: [
      {
        id: VideoSourceIds.IceINFERN0_guide_Adler_v_1_0,
        author: "IceINFERN0",
        title: "АДЛЕР — Лучший бесплатный саппорт? Полный разбор персонажа NTE",
        date: "2026-05-11",
        url: "https://youtu.be/tofNCsgRbc4",
      },
      {
        id: VideoSourceIds.IceINFERN0_guide_Baicang_v_1_0,
        author: "IceINFERN0",
        title: "САМЫЙ СЛОЖНЫЙ DPS в NTE?! 🔥 Полный Гайд на Байканга",
        date: "2026-05-12",
        url: "https://youtu.be/LxthhG0mX8E",
      },
      {
        id: VideoSourceIds.IceINFERN0_guide_Chiz_v_1_0,
        author: "IceINFERN0",
        title: "ТЫ ИГРАЕШЬ НЕПРАВИЛЬНО! ❌ ПОЛНЫЙ ГАЙД НА ЧИЗ В NTE",
        date: "2026-05-14",
        url: "https://youtu.be/WtLH2j-NqrQ",
      },
      {
        id: VideoSourceIds.IceINFERN0_guide_EsperZero_v_1_0,
        author: "IceINFERN0",
        title: "Как играть за Эспера (Zero)? Гайд на главного героя NTE",
        date: "2026-05-08",
        url: "https://youtu.be/leq82z3_niA",
      },
      {
        id: VideoSourceIds.IceINFERN0_guide_Fadia_v_1_0,
        author: "IceINFERN0",
        title: "ЗАБЕРИ ЕЁ БЕСПЛАТНО И ЗАБУДЬ ПРО УКЛОНЕНИЯ! 🔥 Полный разбор Фадии в Neverness to Everness",
        date: "2026-05-26",
        url: "https://youtu.be/EmAlLmuWk2g",
      },
      {
        id: VideoSourceIds.IceINFERN0_guide_Hathor_v_1_0,
        author: "IceINFERN0",
        title: "ХАТОР NTE — СЕКРЕТ КРАШ-ТЕСТА БОССОВ! 🔥 Почему твоя Хатор НЕ ДАМАЖИТ? (Билд, Ротации, Модули)",
        date: "2026-05-28",
        url: "https://youtu.be/Ps3VEa0CeBg",
      },
      {
        id: VideoSourceIds.IceINFERN0_guide_Nanally_v_1_0,
        author: "IceINFERN0",
        title: "НАНАЛЛИ — ЛУЧШИЙ DPS НА СТАРТЕ?! Полный ГАЙД ⚡ Билд, Дуга, Пробуждения | NTE Neverness to Everness",
        date: "2026-05-08",
        url: "https://youtu.be/EKt61Cas3HU",
      },
      {
        id: VideoSourceIds.IceINFERN0_guide_Sakiri_v_1_0,
        author: "IceINFERN0",
        title: "САКИРИ — ПОЛНЫЙ ГАЙД! Лучший билд, оружие, отряды и как играть | NTE Neverness to Everness",
        date: "2026-05-10",
        url: "https://youtu.be/crfb52YrcA8",
      },
      {
        id: VideoSourceIds.IceINFERN0_Umbrella_or_TheFoolsSpring_on_Adler,
        author: "IceINFERN0",
        title: "ВЫ ВСЁ ДЕЛАЕТЕ НЕ ТАК! Зонтик или Весна на Адлера?",
        date: "2026-05-13",
        url: "https://youtu.be/6edb14ctwDc",
      },
    ],
    transformList: item => item,
  },
} satisfies {
  "arc-types": CategoryConfig<"arc-types">;
  "arcs": CategoryConfig<"arcs">;
  "cartridges": CategoryConfig<"cartridges">;
  "character-roles": CategoryConfig<"character-roles">;
  "characters": CategoryConfig<"characters">;
  "characters-build-guide": CategoryConfig<"characters-build-guide">;
  "elements": CategoryConfig<"elements">;
  "modules": CategoryConfig<"modules">;
  "ranks": CategoryConfig<"ranks">;
  "video-sources": CategoryConfig<"video-sources">;
};

async function ensureDir(dir: string) {
  try {
    await fs.mkdir(dir, { recursive: true });
  }
  catch (err) {
    if (err && typeof err === "object" && "code" in err && err.code === "EEXIST") {
      return;
    }

    throw err;
  }
}

async function generateCategory<T extends CategoryType>(categoryName: T, config: CategoryConfig<T>) {
  console.log(`Генерация данных для ${categoryName}...`);

  const categoryDir = path.join(OUTPUT_DIR, categoryName);
  await ensureDir(categoryDir);

  const indexData = config.data.map(item => config.transformList(item));
  await fs.writeFile(path.join(categoryDir, "index.json"), JSON.stringify(indexData, null, 2));

  const detailsDir = path.join(categoryDir, "details");
  await ensureDir(detailsDir);

  for (const item of config.data) {
    await fs.writeFile(path.join(detailsDir, `${item.id}.json`), JSON.stringify(item, null, 2));
  }

  console.log(`✓ ${categoryName} – ${config.data.length} элементов`);
}

async function main() {
  try {
    console.log("Начинаем генерацию статических данных...");
    await ensureDir(OUTPUT_DIR);

    await generateCategory("arc-types", CATEGORIES["arc-types"]);
    await generateCategory("arcs", CATEGORIES["arcs"]);
    await generateCategory("cartridges", CATEGORIES["cartridges"]);
    await generateCategory("character-roles", CATEGORIES["character-roles"]);
    await generateCategory("characters", CATEGORIES["characters"]);
    await generateCategory("characters-build-guide", CATEGORIES["characters-build-guide"]);
    await generateCategory("elements", CATEGORIES["elements"]);
    await generateCategory("modules", CATEGORIES["modules"]);
    await generateCategory("ranks", CATEGORIES["ranks"]);
    await generateCategory("video-sources", CATEGORIES["video-sources"]);

    console.log("✅ Генерация завершена!");
  }
  catch (err) {
    console.error("❌ Ошибка генерации:", err);
    process.exit(1);
  }
}

main();
