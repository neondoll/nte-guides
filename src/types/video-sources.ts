import { VideoSourceIds } from "@/enums/video-sources";

export type VideoSource = { id: VideoSourceId; author: string; title: string; date: string; url: string };
export type VideoSourceId = typeof VideoSourceIds[keyof typeof VideoSourceIds];
