import fs from "fs/promises";
import path from "path";
// import { loadEnv } from "vite";

import nineHundredAndNinetyNineNightsClasses from "./data/999-nights-classes";
import nineHundredAndNinetyNineNightsEquipments from "./data/999-nights-equipments";
import arcTypes from "./data/arc-types";
import arcs from "./data/arcs";
import arcsGuide from "./data/arcs-guide";
import cartridges from "./data/cartridges";
import characterRoles from "./data/character-roles";
import characters from "./data/characters";
import charactersBuildGuide from "./data/characters-build-guide";
import elements from "./data/elements";
import modules from "./data/modules";
import ranks from "./data/ranks";
import videoSources from "./data/video-sources";
import type { NineHundredAndNinetyNineNightsClass } from "../src/types/999-nights-classes";
import type { NineHundredAndNinetyNineNightsEquipment } from "../src/types/999-nights-equipments";
import type { ArcType } from "../src/types/arc-types";
import type { Arc, ArcListItem } from "../src/types/arcs";
import type { ArcGuide, ArcGuideListItem } from "../src/types/arcs-guide";
import type { Cartridge, CartridgeListItem } from "../src/types/cartridges";
import type { CharacterRole } from "../src/types/character-roles";
import type { Character, CharacterListItem } from "../src/types/characters";
import type { CharacterBuildGuide, CharacterBuildGuideListItem } from "../src/types/characters-build-guide";
import type { Element } from "../src/types/elements";
import type { Module } from "../src/types/modules";
import type { Rank } from "../src/types/ranks";
import type { VideoSource } from "../src/types/video-sources";

type CategoryType = "999-nights-classes" | "999-nights-equipments" | "arc-types" | "arcs" | "arcs-guide" | "cartridges"
  | "character-roles" | "characters" | "characters-build-guide" | "elements" | "modules" | "ranks" | "video-sources";
type DataItem<T extends CategoryType>
  = T extends "999-nights-classes" ? NineHundredAndNinetyNineNightsClass
    : T extends "999-nights-equipments" ? NineHundredAndNinetyNineNightsEquipment
      : T extends "arc-types" ? ArcType
        : T extends "arcs" ? Arc
          : T extends "arcs-guide" ? ArcGuide
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
  = T extends "999-nights-classes" ? NineHundredAndNinetyNineNightsClass
    : T extends "999-nights-equipments" ? NineHundredAndNinetyNineNightsEquipment
      : T extends "arc-types" ? ArcType
        : T extends "arcs" ? ArcListItem
          : T extends "arcs-guide" ? ArcGuideListItem
            : T extends "cartridges" ? CartridgeListItem
              : T extends "character-roles" ? CharacterRole
                : T extends "characters" ? CharacterListItem
                  : T extends "characters-build-guide" ? CharacterBuildGuideListItem
                    : T extends "elements" ? Element
                      : T extends "modules" ? Module
                        : T extends "ranks" ? Rank
                          : T extends "video-sources" ? VideoSource
                            : never;

interface CategoryConfig<T extends CategoryType> {
  data: DataItem<T>[];
  transformList: (item: DataItem<T>) => DataListItem<T>;
}

// const env = loadEnv("development", process.cwd(), "");

// const BASE_URL = env.VITE_BASE_URL || "/";
const OUTPUT_DIR = path.resolve("public/data");

const CATEGORIES = {
  "999-nights-classes": { data: Object.values(nineHundredAndNinetyNineNightsClasses), transformList: item => item },
  "999-nights-equipments": {
    data: Object.values(nineHundredAndNinetyNineNightsEquipments),
    transformList: item => item,
  },
  "arc-types": { data: Object.values(arcTypes), transformList: item => item },
  "arcs": { data: Object.values(arcs), transformList: item => item },
  "arcs-guide": { data: Object.values(arcsGuide), transformList: ({ id }) => ({ id }) },
  "cartridges": { data: Object.values(cartridges), transformList: item => item },
  "character-roles": { data: Object.values(characterRoles), transformList: item => item },
  "characters": { data: Object.values(characters), transformList: item => item },
  "characters-build-guide": { data: Object.values(charactersBuildGuide), transformList: ({ id }) => ({ id }) },
  "elements": { data: Object.values(elements), transformList: item => item },
  "modules": { data: Object.values(modules), transformList: item => item },
  "ranks": { data: Object.values(ranks), transformList: item => item },
  "video-sources": { data: Object.values(videoSources), transformList: item => item },
} satisfies {
  "999-nights-classes": CategoryConfig<"999-nights-classes">;
  "999-nights-equipments": CategoryConfig<"999-nights-equipments">;
  "arc-types": CategoryConfig<"arc-types">;
  "arcs": CategoryConfig<"arcs">;
  "arcs-guide": CategoryConfig<"arcs-guide">;
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

    await generateCategory("999-nights-classes", CATEGORIES["999-nights-classes"]);
    await generateCategory("999-nights-equipments", CATEGORIES["999-nights-equipments"]);
    await generateCategory("arc-types", CATEGORIES["arc-types"]);
    await generateCategory("arcs", CATEGORIES["arcs"]);
    await generateCategory("arcs-guide", CATEGORIES["arcs-guide"]);
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
