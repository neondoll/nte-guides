import { ModuleIds } from "../../src/enums/modules";
import type { Module } from "../../src/types/modules";

const image = (value: string) => `images/modules/${value}`;

export default {
  [ModuleIds.I2]: { id: ModuleIds.I2, type: 2, image: image("i2.png") },
  [ModuleIds.I2R]: { id: ModuleIds.I2R, type: 2, image: image("i2-r.png") },
  [ModuleIds.I3]: { id: ModuleIds.I3, type: 3, image: image("i3.png") },
  [ModuleIds.I3R]: { id: ModuleIds.I3R, type: 3, image: image("i3-r.png") },
  [ModuleIds.I4]: { id: ModuleIds.I4, type: 4, image: image("i4.png") },
  [ModuleIds.I4R]: { id: ModuleIds.I4R, type: 4, image: image("i4-r.png") },
  [ModuleIds.J]: { id: ModuleIds.J, type: 3, image: image("j.png") },
  [ModuleIds.JR]: { id: ModuleIds.JR, type: 3, image: image("j-r.png") },
  [ModuleIds.L]: { id: ModuleIds.L, type: 3, image: image("l.png") },
  [ModuleIds.LR]: { id: ModuleIds.LR, type: 3, image: image("l-r.png") },
  [ModuleIds.S]: { id: ModuleIds.S, type: 4, image: image("s.png") },
  [ModuleIds.SR]: { id: ModuleIds.SR, type: 4, image: image("s-r.png") },
} as Record<Module["id"], Module>;
