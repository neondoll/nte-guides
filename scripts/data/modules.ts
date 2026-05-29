import { ModuleIds } from "../../src/enums/modules";
import type { Module } from "../../src/types/modules";

export default [
  { id: ModuleIds.I2, type: 2, image: "images/modules/i2.png" },
  { id: ModuleIds.I2R, type: 2, image: "images/modules/i2-r.png" },
  { id: ModuleIds.I3, type: 3, image: "images/modules/i3.png" },
  { id: ModuleIds.I3R, type: 3, image: "images/modules/i3-r.png" },
  { id: ModuleIds.I4, type: 4, image: "images/modules/i4.png" },
  { id: ModuleIds.I4R, type: 4, image: "images/modules/i4-r.png" },
  { id: ModuleIds.J, type: 3, image: "images/modules/j.png" },
  { id: ModuleIds.JR, type: 3, image: "images/modules/j-r.png" },
  { id: ModuleIds.L, type: 3, image: "images/modules/l.png" },
  { id: ModuleIds.LR, type: 3, image: "images/modules/l-r.png" },
  { id: ModuleIds.S, type: 4, image: "images/modules/s.png" },
  { id: ModuleIds.SR, type: 4, image: "images/modules/s-r.png" },
] as Array<Module>;
