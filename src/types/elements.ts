import { ElementIds } from "@/enums/elements";

export type Element = { id: typeof ElementIds[keyof typeof ElementIds]; name: string; image: string };
