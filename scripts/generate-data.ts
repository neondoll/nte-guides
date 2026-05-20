import fs from "fs/promises";
import path from "path";
import { loadEnv } from "vite";

import { ArcTypeIds } from "../src/enums/arc-types";
import { CharacterRoleIds } from "../src/enums/character-roles";
import { CharacterIds } from "../src/enums/characters";
import { ElementIds } from "../src/enums/elements";
import { RankIds } from "../src/enums/ranks";
import type { ArcType, ArcTypeListItem } from "../src/types/arc-types";
import type { CharacterRole, CharacterRoleListItem } from "../src/types/character-roles";
import type { Character, CharacterListItem } from "../src/types/characters";
import type { Element, ElementListItem } from "../src/types/elements";
import type { Rank, RankListItem } from "../src/types/ranks";

type CategoryType = "arc-types" | "character-roles" | "characters" | "elements" | "ranks";
type DataItem<T extends CategoryType>
  = T extends "arc-types" ? ArcType
  : T extends "character-roles" ? CharacterRole
    : T extends "characters" ? Character
      : T extends "elements" ? Element
        : T extends "ranks" ? Rank : never;
type DataListItem<T extends CategoryType>
  = T extends "arc-types" ? ArcTypeListItem
  : T extends "character-roles" ? CharacterRoleListItem
    : T extends "characters" ? CharacterListItem
      : T extends "elements" ? ElementListItem
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
      { id: ArcTypeIds.Gas, name: "Gas", image: BASE_URL + "images/arc-types/gas.png" },
      { id: ArcTypeIds.Liquid, name: "Liquid", image: BASE_URL + "images/arc-types/liquid.png" },
      { id: ArcTypeIds.Plasma, name: "Plasma", image: BASE_URL + "images/arc-types/plasma.png" },
      { id: ArcTypeIds.Solid, name: "Solid", image: BASE_URL + "images/arc-types/solid.png" },
      { id: ArcTypeIds.Synthesis, name: "Synthesis", image: BASE_URL + "images/arc-types/synthesis.png" },
    ],
    transformList: item => item,
  },
  "character-roles": {
    data: [
      { id: CharacterRoleIds.Buff, name: "Buff", image: BASE_URL + "images/character-roles/buff.png" },
      { id: CharacterRoleIds.Damage, name: "Damage", image: BASE_URL + "images/character-roles/damage.png" },
      { id: CharacterRoleIds.Survival, name: "Survival", image: BASE_URL + "images/character-roles/survival.png" },
    ],
    transformList: item => item,
  },
  "characters": {
    data: [
      {
        id: CharacterIds.Adler,
        name: "Adler",
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
        name: "Aurelia",
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
        name: "Edgar",
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
        name: "Haniel",
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
        name: "Skia",
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
      { id: ElementIds.Anima, name: "Anima", image: BASE_URL + "images/elements/anima.png" },
      { id: ElementIds.Chaos, name: "Chaos", image: BASE_URL + "images/elements/chaos.png" },
      { id: ElementIds.Cosmos, name: "Cosmos", image: BASE_URL + "images/elements/cosmos.png" },
      { id: ElementIds.Incantation, name: "Incantation", image: BASE_URL + "images/elements/incantation.png" },
      { id: ElementIds.Lakshana, name: "Lakshana", image: BASE_URL + "images/elements/lakshana.png" },
      { id: ElementIds.Psyche, name: "Psyche", image: BASE_URL + "images/elements/psyche.png" },
    ],
    transformList: item => item,
  },
  "ranks": {
    data: [
      { id: RankIds.A, name: "A", image: BASE_URL + "images/ranks/a.png" },
      { id: RankIds.S, name: "S", image: BASE_URL + "images/ranks/s.png" },
    ],
    transformList: item => item,
  },
} satisfies {
  "arc-types": CategoryConfig<"arc-types">;
  "character-roles": CategoryConfig<"character-roles">;
  "characters": CategoryConfig<"characters">;
  "elements": CategoryConfig<"elements">;
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
    await generateCategory("character-roles", CATEGORIES["character-roles"]);
    await generateCategory("characters", CATEGORIES["characters"]);
    await generateCategory("elements", CATEGORIES["elements"]);
    await generateCategory("ranks", CATEGORIES["ranks"]);

    console.log("✅ Генерация завершена!");
  }
  catch (err) {
    console.error("❌ Ошибка генерации:", err);
    process.exit(1);
  }
}

main();
