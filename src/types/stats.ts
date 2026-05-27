import { Stats } from "@/enums/stats";

export type Stat = typeof Stats[keyof typeof Stats];
