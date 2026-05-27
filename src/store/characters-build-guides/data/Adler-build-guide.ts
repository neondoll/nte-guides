import { ArcIds } from "@/enums/arcs";
import { CartridgeIds } from "@/enums/cartridges";
import { CharacterIds } from "@/enums/characters";
import type { CharacterBuildGuide } from "@/types/characters-build-guides";
import { Stats } from "@/enums/stats";

export default {
  id: CharacterIds.Adler,
  recommendedArcs: [{ id: ArcIds.Umbrella }, { id: ArcIds.TheGoodTheBadTheBitter }, { id: ArcIds.ATimeWillCome }],
  recommendedCartridges: [{ id: CartridgeIds.KingdomsGuard }, { id: CartridgeIds.CrimsonTwinButterflies }],
  cartridgeBestMainStat: [Stats.DEF_PERCENTAGE],
  subStats: [
    { value: Stats.DEF_PERCENTAGE, priority: "★★★" },
    { value: Stats.DMG, priority: "★★★" },
    { value: Stats.CYCLE_INTENSITY, priority: "★★" },
    { value: Stats.CRIT_RATE, priority: "★★" },
    { value: Stats.CRIT_DMG, priority: "★" },
  ],
  bestTeams: [
    {
      title: "Adler Scorch/Discord Team",
      slot1: { title: "Main DPS", variants: [CharacterIds.Baicang] },
      slot2: { title: "Sub-DPS", variants: [CharacterIds.Daffodill] },
      slot3: { title: "Buffer", variants: [CharacterIds.Sakiri, CharacterIds.Haniel] },
      slot4: { title: "Support", variants: [CharacterIds.Adler] },
    },
    {
      title: "Adler Hexed Team",
      slot1: { title: "Main DPS", variants: [CharacterIds.Nanally] },
      slot2: { title: "Sub-DPS", variants: [CharacterIds.Jiuyuan] },
      slot3: { title: "Buffer", variants: [CharacterIds.Sakiri] },
      slot4: { title: "Support", variants: [CharacterIds.Adler] },
    },
  ],
  recommendedSkills: [
    { value: "Evil's Bane (Skill)", priority: "★★★★★" },
    { value: "Tranquility (Ultimate)", priority: "★★★" },
    { value: "Pristine Reflection (Support Skill)", priority: "★★" },
    { value: "Deliverance (Basic Attack)", priority: "★★" },
  ],
  recommendedAwakeningSkills: [
    { value: "All Forms Are Void", priority: "★★★★★" },
    { value: "Perception", priority: "★★★★" },
    { value: "Formation", priority: "★★★★" },
    { value: "Discernment", priority: "★★★" },
    { value: "Form", priority: "★★★" },
    { value: "Sensation", priority: "★★★" },
  ],
} as CharacterBuildGuide;
