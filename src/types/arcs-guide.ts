import type { Arc } from "@/types/arcs";
import type { Character } from "@/types/characters";
import type { VideoSource } from "@/types/video-sources";

export type ArcGuide = {
  id: Arc["id"];
  bestCharacters: Array<{ id: Character["id"]; explanation?: string }>;
  videoSourceIds: Array<VideoSource["id"]>;
};
export type ArcGuideListItem = Pick<ArcGuide, "id">;
