import { ElementIds } from "@/enums/elements";

export interface Element {
  id: typeof ElementIds[keyof typeof ElementIds];
  name: string;
  image: string;
}

export type ElementListItem = Element;
