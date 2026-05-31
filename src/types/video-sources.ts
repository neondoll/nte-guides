import { VideoSourceIds } from "@/enums/video-sources";

export type VideoSource = {
  id: typeof VideoSourceIds[keyof typeof VideoSourceIds];
  author: string;
  title: string;
  date: string;
  url: string;
};
