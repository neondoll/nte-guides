import { type FC, useMemo } from "react";

import { Button } from "./ui/button";
import { ExternalLinkIcon } from "./ui/icon";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { useAppSelector } from "@/store";
import type { VideoSourceId } from "@/types/video-sources";

export const VideoSourcesTable: FC<{ videoSourceIds: VideoSourceId[] }> = ({ videoSourceIds }) => {
  const videoSourceList = useAppSelector(state => state.videoSources.list);

  const videoSources = useMemo(() => {
    return videoSourceList.filter(item => videoSourceIds.includes(item.id));
  }, [videoSourceIds, videoSourceList]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Автор</TableHead>
          <TableHead className="text-center">Название</TableHead>
          <TableHead className="text-center">Дата выхода</TableHead>
          <TableHead className="text-center">Ссылка</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {videoSources.map(videoSource => (
          <TableRow key={videoSource.id}>
            <TableCell children={videoSource.author} className="text-center" />
            <TableCell children={videoSource.title} className="text-center" />
            <TableCell children={videoSource.date} className="text-center" />
            <TableCell className="text-center">
              <Button asChild size="icon-xs">
                <a href={videoSource.url} target="_blank">
                  <ExternalLinkIcon />
                </a>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
