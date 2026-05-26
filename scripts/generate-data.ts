import fs from "fs/promises";
import path from "path";
import { loadEnv } from "vite";

import { ArcTypeIds } from "../src/enums/arc-types";
import { ArcIds } from "../src/enums/arcs";
import { CharacterRoleIds } from "../src/enums/character-roles";
import { CharacterIds } from "../src/enums/characters";
import { ElementIds } from "../src/enums/elements";
import { ModuleIds } from "../src/enums/modules";
import { RankIds } from "../src/enums/ranks";
import type { ArcType, ArcTypeListItem } from "../src/types/arc-types";
import type { Arc, ArcListItem } from "../src/types/arcs";
import type { Cartridge, CartridgeListItem } from "../src/types/cartridges";
import type { CharacterRole, CharacterRoleListItem } from "../src/types/character-roles";
import type { Character, CharacterListItem } from "../src/types/characters";
import type { Element, ElementListItem } from "../src/types/elements";
import type { Module } from "../src/types/modules";
import type { Rank, RankListItem } from "../src/types/ranks";
import { CartridgeIds } from "../src/enums/cartridges.ts";

type CategoryType = "arc-types" | "arcs" | "cartridges" | "character-roles" | "characters" | "elements" | "modules"
  | "ranks";
type DataItem<T extends CategoryType>
  = T extends "arc-types" ? ArcType
    : T extends "arcs" ? Arc
      : T extends "cartridges" ? Cartridge
        : T extends "character-roles" ? CharacterRole
          : T extends "characters" ? Character
            : T extends "elements" ? Element
              : T extends "modules" ? Module
                : T extends "ranks" ? Rank
                  : never;
type DataListItem<T extends CategoryType>
  = T extends "arc-types" ? ArcTypeListItem
    : T extends "arcs" ? ArcListItem
      : T extends "cartridges" ? CartridgeListItem
        : T extends "character-roles" ? CharacterRoleListItem
          : T extends "characters" ? CharacterListItem
            : T extends "elements" ? ElementListItem
              : T extends "modules" ? Module
                : T extends "ranks" ? RankListItem
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
        name: "A Time Will Come",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Synthesis,
        baseATK80: 475,
        substat: "CRIT Rate",
        substat80: "20%",
        image: BASE_URL + "images/arcs/a-time-will-come.png",
      },
      {
        id: ArcIds.BeHappy,
        name: "Be Happy",
        rankId: RankIds.B,
        typeId: ArcTypeIds.Gas,
        baseATK80: 316,
        substat: "HP",
        substat80: "30%",
        image: BASE_URL + "images/arcs/be-happy.png",
      },
      {
        id: ArcIds.BlowUpTheCrowd,
        name: "Blow up the Crowd",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Solid,
        baseATK80: 512,
        substat: "ATK",
        substat80: "27.5%",
        image: BASE_URL + "images/arcs/blow-up-the-crowd.png",
      },
      {
        id: ArcIds.CallOfTheTwistedCity,
        name: "Call of the Twisted City",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Liquid,
        baseATK80: 395,
        substat: "HP",
        substat80: "37.5%",
        image: BASE_URL + "images/arcs/call-of-the-twisted-city.png",
      },
      {
        id: ArcIds.CamelliaSociety,
        name: "Camellia Society",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Synthesis,
        baseATK80: 666,
        substat: "CRIT Rate",
        substat80: "12%",
        image: BASE_URL + "images/arcs/camellia-society.png",
      },
      {
        id: ArcIds.ClearSkies,
        name: "Clear Skies",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Liquid,
        baseATK80: 475,
        substat: "ATK",
        substat80: "25%",
        image: BASE_URL + "images/arcs/clear-skies.png",
      },
      {
        id: ArcIds.ContemplativeCat,
        name: "Contemplative Cat",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Gas,
        baseATK80: 512,
        substat: "CRIT DMG",
        substat80: "44%",
        image: BASE_URL + "images/arcs/contemplative-cat.png",
      },
      {
        id: ArcIds.CosmosDazeWildReverie,
        name: "Cosmos Daze, Wild Reverie",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Gas,
        baseATK80: 475,
        substat: "ATK",
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
        name: "Day Off",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Solid,
        baseATK80: 512,
        substat: "Charge Efficiency",
        substat80: "33%",
        image: BASE_URL + "images/arcs/day-off.png",
      },
      {
        id: ArcIds.DrawnBlade,
        name: "Drawn Blade",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Plasma,
        baseATK80: 395,
        substat: "ATK",
        substat80: "37.5%",
        image: BASE_URL + "images/arcs/drawn-blade.png",
      },
      {
        id: ArcIds.EternalWaltz,
        name: "Eternal Waltz",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Synthesis,
        baseATK80: 424,
        substat: "HP",
        substat80: "41.2%",
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
        substat: "ATK",
        substat80: "20%",
        image: BASE_URL + "images/arcs/first-step-to-success.png",
      },
      {
        id: ArcIds.FluffOfFearlessness,
        name: "Fluff of Fearlessness",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Solid,
        baseATK80: 512,
        substat: "CRIT Rate",
        substat80: "22%",
        image: BASE_URL + "images/arcs/fluff-of-fearlessness.png",
      },
      {
        id: ArcIds.FluffOfFerocity,
        name: "Fluff of Ferocity",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Synthesis,
        baseATK80: 512,
        substat: "ATK",
        substat80: "27.5%",
        image: BASE_URL + "images/arcs/fluff-of-ferocity.png",
      },
      {
        id: ArcIds.FluffOfFinesse,
        name: "Fluff of Finesse",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Gas,
        baseATK80: 512,
        substat: "ATK",
        substat80: "27.5%",
        image: BASE_URL + "images/arcs/fluff-of-finesse.png",
      },
      {
        id: ArcIds.FluffOfFleetness,
        name: "Fluff of Fleetness",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Liquid,
        baseATK80: 512,
        substat: "CRIT DMG",
        substat80: "44%",
        image: BASE_URL + "images/arcs/fluff-of-fleetness.png",
      },
      {
        id: ArcIds.FluffOfFortitude,
        name: "Fluff of Fortitude",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Plasma,
        baseATK80: 512,
        substat: "ATK",
        substat80: "27.5%",
        image: BASE_URL + "images/arcs/fluff-of-fortitude.png",
      },
      {
        id: ArcIds.GoodBoysGrandAdventure,
        name: "Good Boy's Grand Adventure",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Gas,
        baseATK80: 474,
        substat: "ATK",
        substat80: "45%",
        image: BASE_URL + "images/arcs/good-boys-grand-adventure.png",
      },
      {
        id: ArcIds.HethereausKeeper,
        name: "Hethereau's Keeper",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Solid,
        baseATK80: 512,
        substat: "ATK",
        substat80: "27.5%",
        image: BASE_URL + "images/arcs/hethereaus-keeper.png",
      },
      {
        id: ArcIds.MarchingBeyondTime,
        name: "Marching Beyond Time",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Solid,
        baseATK80: 570,
        substat: "CRIT Rate",
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
        name: "Oraora!",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Plasma,
        baseATK80: 395,
        substat: "ATK",
        substat80: "37.5%",
        image: BASE_URL + "images/arcs/oraora.png",
      },
      {
        id: ArcIds.RagingFlames,
        name: "Raging Flames",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Plasma,
        baseATK80: 666,
        substat: "CRIT DMG",
        substat80: "24%",
        image: BASE_URL + "images/arcs/raging-flames.png",
      },
      {
        id: ArcIds.ReadyReady,
        name: "Ready-Ready",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Plasma,
        baseATK80: 570,
        substat: "CRIT Rate",
        substat80: "24%",
        image: BASE_URL + "images/arcs/ready-ready.png",
      },
      {
        id: ArcIds.RealMusic,
        name: "\"Real Music\"",
        rankId: RankIds.B,
        typeId: ArcTypeIds.Liquid,
        baseATK80: 380,
        substat: "ATK",
        substat80: "20%",
        image: BASE_URL + "images/arcs/real-music.png",
      },
      {
        id: ArcIds.RealityRefuge,
        name: "Reality Refuge",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Solid,
        baseATK80: 570,
        substat: "ATK",
        substat80: "30%",
        image: BASE_URL + "images/arcs/reality-refuge.png",
      },
      {
        id: ArcIds.ShinyDays,
        name: "Shiny Days",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Liquid,
        baseATK80: 475,
        substat: "ATK",
        substat80: "25%",
        image: BASE_URL + "images/arcs/shiny-days.png",
      },
      {
        id: ArcIds.SongOfTheWhale,
        name: "Song of the Whale",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Plasma,
        baseATK80: 512,
        substat: "ATK",
        substat80: "27.5%",
        image: BASE_URL + "images/arcs/song-of-the-whale.png",
      },
      {
        id: ArcIds.StellarVeil,
        name: "Stellar Veil",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Plasma,
        baseATK80: 512,
        substat: "ATK",
        substat80: "27.5%",
        image: BASE_URL + "images/arcs/stellar-veil.png",
      },
      {
        id: ArcIds.TearsBeneathTheMask,
        name: "Tears Beneath the Mask",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Gas,
        baseATK80: 512,
        substat: "ATK",
        substat80: "27.5%",
        image: BASE_URL + "images/arcs/tears-beneath-the-mask.png",
      },
      {
        id: ArcIds.TheFoolsSpring,
        name: "The Fools' Spring",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Synthesis,
        baseATK80: 395,
        substat: "DEF",
        substat80: "52.5%",
        image: BASE_URL + "images/arcs/the-fools-spring.png",
      },
      {
        id: ArcIds.TheForgotten,
        name: "The Forgotten",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Solid,
        baseATK80: 475,
        substat: "HP",
        substat80: "25%",
        image: BASE_URL + "images/arcs/the-forgotten.png",
      },
      {
        id: ArcIds.TheGoodTheBadTheBitter,
        name: "The Good, The Bad, The Bitter",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Synthesis,
        baseATK80: 475,
        substat: "HP",
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
        substat: "CRIT Rate",
        substat80: "24%",
        // image: BASE_URL + "images/arcs/",
      },
      {
        id: ArcIds.TheRainThatShookTheWorld,
        name: "The Rain That Shook the World",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Solid,
        baseATK80: 512,
        substat: "CRIT Rate",
        substat80: "22%",
        image: BASE_URL + "images/arcs/the-rain-that-shook-the-world.png",
      },
      {
        id: ArcIds.TimeBandit,
        name: "Time Bandit",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Solid,
        baseATK80: 475,
        substat: "HP",
        substat80: "25%",
        // image: BASE_URL + "images/arcs/",
      },
      {
        id: ArcIds.Umbrella,
        name: "Umbrella",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Synthesis,
        baseATK80: 395,
        substat: "DEF",
        substat80: "52.5%",
        image: BASE_URL + "images/arcs/umbrella.png",
      },
      {
        id: ArcIds.Us,
        name: "Us.",
        rankId: RankIds.B,
        typeId: ArcTypeIds.Plasma,
        baseATK80: 380,
        substat: "ATK",
        substat80: "20%",
        image: BASE_URL + "images/arcs/us.png",
      },
      {
        id: ArcIds.WatchYourHeads,
        name: "Watch Your Heads!",
        rankId: RankIds.A,
        typeId: ArcTypeIds.Gas,
        baseATK80: 475,
        substat: "CRIT DMG",
        substat80: "40%",
        image: BASE_URL + "images/arcs/watch-your-heads.png",
      },
      {
        id: ArcIds.YourHappinessIsPriceless,
        name: "Your Happiness is Priceless",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Solid,
        baseATK80: 512,
        substat: "DEF",
        substat80: "38.5%",
        image: BASE_URL + "images/arcs/your-happiness-is-priceless.png",
      },
      {
        id: ArcIds.YouthfulFantasy,
        name: "Youthful Fantasy",
        rankId: RankIds.S,
        typeId: ArcTypeIds.Liquid,
        baseATK80: 570,
        substat: "ATK",
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
} satisfies {
  "arc-types": CategoryConfig<"arc-types">;
  "arcs": CategoryConfig<"arcs">;
  "cartridges": CategoryConfig<"cartridges">;
  "character-roles": CategoryConfig<"character-roles">;
  "characters": CategoryConfig<"characters">;
  "elements": CategoryConfig<"elements">;
  "modules": CategoryConfig<"modules">;
  "ranks": CategoryConfig<"ranks">;
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
    await generateCategory("elements", CATEGORIES["elements"]);
    await generateCategory("modules", CATEGORIES["modules"]);
    await generateCategory("ranks", CATEGORIES["ranks"]);

    console.log("✅ Генерация завершена!");
  }
  catch (err) {
    console.error("❌ Ошибка генерации:", err);
    process.exit(1);
  }
}

main();
