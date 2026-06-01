import type { ArcId } from "@/types/arcs";
import type { CharacterId } from "@/types/characters";
import type { VideoSourceId } from "@/types/video-sources";

export type ArcGuide = {
  id: ArcId;
  bestCharacters: Array<{ id: CharacterId; explanation?: string }>;
  videoSourceIds: VideoSourceId[];
};
export type ArcGuideListItem = Pick<ArcGuide, "id">;
