import fs from "fs/promises";
import path from "path";
// import { loadEnv } from "vite";

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
import type { ArcType, ArcTypeListItem } from "../src/types/arc-types";
import type { Arc, ArcListItem } from "../src/types/arcs";
import type { ArcGuide, ArcGuideListItem } from "../src/types/arcs-guide";
import type { Cartridge, CartridgeListItem } from "../src/types/cartridges";
import type { CharacterRole, CharacterRoleListItem } from "../src/types/character-roles";
import type { Character, CharacterListItem } from "../src/types/characters";
import type { CharacterBuildGuide, CharacterBuildGuideListItem } from "../src/types/characters-build-guide";
import type { Element, ElementListItem } from "../src/types/elements";
import type { Module } from "../src/types/modules";
import type { Rank, RankListItem } from "../src/types/ranks";
import type { VideoSource } from "../src/types/video-sources";

type CategoryType = "arc-types" | "arcs" | "arcs-guide" | "cartridges" | "character-roles" | "characters"
  | "characters-build-guide" | "elements" | "modules" | "ranks" | "video-sources";
type DataItem<T extends CategoryType>
  = T extends "arc-types" ? ArcType
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
  = T extends "arc-types" ? ArcTypeListItem
    : T extends "arcs" ? ArcListItem
      : T extends "arcs-guide" ? ArcGuideListItem
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

// const env = loadEnv("development", process.cwd(), "");

// const BASE_URL = env.VITE_BASE_URL || "/";
const OUTPUT_DIR = path.resolve("public/data");

const CATEGORIES = {
  "arc-types": { data: arcTypes, transformList: item => item },
  "arcs": { data: arcs, transformList: item => item },
  "arcs-guide": { data: arcsGuide, transformList: ({ id }) => ({ id }) },
  "cartridges": { data: cartridges, transformList: item => item },
  "character-roles": { data: characterRoles, transformList: item => item },
  "characters": { data: characters, transformList: item => item },
  "characters-build-guide": { data: charactersBuildGuide, transformList: ({ id }) => ({ id }) },
  "elements": { data: elements, transformList: item => item },
  "modules": { data: modules, transformList: item => item },
  "ranks": { data: ranks, transformList: item => item },
  "video-sources": { data: videoSources, transformList: item => item },
} satisfies {
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
