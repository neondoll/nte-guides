import { VideoSourceIds } from "@/enums/video-sources";

export interface VideoSource {
  id: typeof VideoSourceIds[keyof typeof VideoSourceIds];
  author: string;
  title: string;
  date: string;
  url: string;
}
