import { type FC, useMemo } from "react";
import { Link } from "react-router";

import { useArcGuide } from "./hooks";
import { CharacterImage } from "@/components/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { VideoSourcesTable } from "@/components/video-sources";
import Paths from "@/paths";
import { useAppSelector } from "@/store";
import type { Arc } from "@/types/arcs";
import type { ArcGuide as Guide } from "@/types/arcs-guide";

const ArcGuide: FC<{ arc: Arc }> = ({ arc }) => {
  const { arcGuide, loading } = useArcGuide(arc.id);
  const charactersLoading = useAppSelector(state => state.characters.listLoading);
  const videoSourcesLoading = useAppSelector(state => state.videoSources.listLoading);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!arcGuide) {
    return;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Руководство</CardTitle>
        {/* <CardDescription /> */}
      </CardHeader>
      <CardContent>
        <Accordion type="multiple">
          <AccordionItem value="best-characters">
            <AccordionTrigger disabled={charactersLoading}>Лучшие персонажи</AccordionTrigger>
            <AccordionContent>
              <ArcGuideBestCharacters recommendations={arcGuide.bestCharacters} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="video-sources">
            <AccordionTrigger disabled={videoSourcesLoading}>Видео-источник</AccordionTrigger>
            <AccordionContent>
              <VideoSourcesTable videoSourceIds={arcGuide.videoSourceIds} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};
const ArcGuideBestCharacters: FC<{ recommendations: Guide["bestCharacters"] }> = ({ recommendations }) => {
  const characters = useAppSelector(state => state.characters.list);

  const hasExplanation = useMemo(() => {
    return recommendations.some(recommendation => Boolean(recommendation.explanation));
  }, [recommendations]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Персонаж</TableHead>
          {hasExplanation && <TableHead className="text-center">Объяснение</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {recommendations.map((recommendation) => {
          const character = characters.find(value => value.id === recommendation.id)!;

          return (
            <TableRow
              className="relative z-0 pointer-events-none has-[a:focus-visible]:bg-muted/50"
              key={recommendation.id}
            >
              <TableHead className="p-3 space-y-1 text-center">
                <CharacterImage
                  alt={character.name}
                  className="mx-auto size-22.5"
                  src={character.imageWithElementAndRank ?? character.image}
                />
                <Link
                  children={character.name}
                  className="outline-none pointer-events-auto before:absolute before:inset-0 before:-z-1"
                  target="_blank"
                  to={Paths.Character(character.id)}
                />
              </TableHead>
              {hasExplanation && <TableCell children={recommendation.explanation} className="whitespace-pre-line" />}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ArcGuide;
