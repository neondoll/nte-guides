import { ArcIds } from "@/enums/arcs";
import { CartridgeIds } from "@/enums/cartridges";
import { CharacterIds } from "@/enums/characters";
import type { CharacterBuildGuide } from "@/types/characters-build-guides";
import { Stats } from "@/enums/stats";

export default {
  id: CharacterIds.Aurelia,
  recommendedArcs: [{ id: ArcIds.StellarVeil }, { id: ArcIds.FluffOfFortitude }, { id: ArcIds.Oraora }],
  recommendedCartridges: [{ id: CartridgeIds.DevilsBloodCurse }, { id: CartridgeIds.ShadowCreed }],
  cartridgeBestMainStat: [Stats.CRIT_RATE, Stats.CRIT_DMG],
  subStats: [
    { value: Stats.CRIT_RATE, priority: "★★★" },
    { value: Stats.CRIT_DMG, priority: "★★★" },
    { value: Stats.DMG, priority: "★★" },
    { value: Stats.ATK_PERCENTAGE, priority: "★★" },
    { value: Stats.CYCLE_INTENSITY, priority: "★" },
  ],
  bestTeams: [{
    title: "Aurelia Discord Team",
    slot1: { title: "Main DPS", variants: [CharacterIds.Aurelia] },
    slot4: { title: "Support", variants: [CharacterIds.Haniel, CharacterIds.Fadia] },
    slot2: { title: "Sub-DPS", variants: [CharacterIds.Daffodill] },
    slot3: { title: "Support", variants: [CharacterIds.Sakiri, CharacterIds.Adler] },
  }],
  recommendedSkills: [
    { value: "Capella (Basic Attack)", priority: "★★★★★" },
    { value: "Canon Chorus (Ultimate)", priority: "★★★★" },
    { value: "Cadenza Aria (Skill)", priority: "★★★" },
    { value: "Dissonance (Support Skill)", priority: "★★★" },
  ],
  recommendedAwakeningSkills: [
    { value: "Bygone Fuge", priority: "★★★★★" },
    { value: "Unique Melody", priority: "★★★★★" },
    { value: "Futuristic Prelude", priority: "★★★★" },
    { value: "Trio Rest", priority: "★★★★" },
    { value: "Simple Melody", priority: "★★★" },
    { value: "Staff Gap", priority: "★★★" },
  ],
} as CharacterBuildGuide;
