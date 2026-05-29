import { type FC, useMemo } from "react";
import { Link } from "react-router";

import { useCharacterBuildGuide } from "./hooks";
import { ArcImage, CartridgeImage, CharacterImage } from "@/components/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { VideoSourcesTable } from "@/components/video-sources";
import { CharacterSkillKeys } from "@/enums/characters";
import Paths from "@/paths";
import { useAppSelector } from "@/store";
import type { Character, CharacterAwakeningSkillKey, CharacterSkillKey } from "@/types/characters";
import type {
  CharacterBuildGuide as BuildGuide,
  CharacterBuildGuideRecommendedSkill as RecommendedSkill,
} from "@/types/characters-build-guide";

const CharacterBuildGuide: FC<{ character: Character }> = ({ character }) => {
  const { characterBuildGuide, loading } = useCharacterBuildGuide(character.id);
  const arcsLoading = useAppSelector(state => state.arcs.listLoading);
  const cartridgesLoading = useAppSelector(state => state.cartridges.listLoading);
  const charactersLoading = useAppSelector(state => state.characters.listLoading);
  const videoSourcesLoading = useAppSelector(state => state.videoSources.listLoading);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!characterBuildGuide) {
    return;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Руководство по сборке</CardTitle>
        {/* <CardDescription /> */}
      </CardHeader>
      <CardContent>
        <Accordion type="multiple">
          <AccordionItem value="recommended-arcs">
            <AccordionTrigger disabled={arcsLoading}>Рекомендуемые дуги</AccordionTrigger>
            <AccordionContent>
              <CharacterBuildGuideRecommendedArcs buildGuide={characterBuildGuide} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="recommended-cartridges-and-best-stats">
            <AccordionTrigger disabled={cartridgesLoading}>Рекомендуемые картриджи и лучшие атрибуты</AccordionTrigger>
            <AccordionContent>
              <CharacterBuildGuideRecommendedCartridgesAndBestStats buildGuide={characterBuildGuide} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="recommended-awakening-skills">
            <AccordionTrigger>Рекомендуемые навыки пробуждения</AccordionTrigger>
            <AccordionContent>
              <CharacterBuildGuideRecommendedAwakeningSkills buildGuide={characterBuildGuide} character={character} />
            </AccordionContent>
          </AccordionItem>
          {characterBuildGuide.recommendedSkills && (
            <AccordionItem value="recommended-skills">
              <AccordionTrigger>Рекомендуемые навыки</AccordionTrigger>
              <AccordionContent>
                <CharacterBuildGuideRecommendedSkills
                  character={character}
                  recommendedSkills={characterBuildGuide.recommendedSkills}
                />
              </AccordionContent>
            </AccordionItem>
          )}
          <AccordionItem value="best-teams">
            <AccordionTrigger disabled={charactersLoading}>Лучшие команды</AccordionTrigger>
            <AccordionContent>
              <CharacterBuildGuideBestTeams buildGuide={characterBuildGuide} character={character} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="video-sources">
            <AccordionTrigger disabled={videoSourcesLoading}>Видео-источник</AccordionTrigger>
            <AccordionContent>
              <VideoSourcesTable videoSourceIds={characterBuildGuide.videoSourceIds} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};
const CharacterBuildGuideBestTeams: FC<{
  buildGuide: BuildGuide;
  character: Character;
}> = ({ buildGuide, character: currentCharacter }) => {
  const characters = useAppSelector(state => state.characters.list);

  return (
    <Table>
      <TableBody>
        {buildGuide.bestTeams.map(team => (
          <TableRow key={team.title}>
            <TableHead children={team.title} className="text-center" />
            <TableCell className="text-center divide-y divide-dashed">
              {team.slot1.map((value) => {
                const character = characters.find(c => c.id == value)!;

                return (
                  <div
                    className="relative z-0 p-2 space-y-1 transition-colors duration-100 pointer-events-none has-[a:focus-visible]:ring-[3px] has-[a:focus-visible]:ring-ring/50 has-[a:hover]:ring-[3px] has-[a:hover]:ring-ring/50"
                    key={value}
                  >
                    <CharacterImage
                      alt={character.name}
                      className="mx-auto size-12.5"
                      src={character.imageWithElementAndRank ?? character.image}
                    />
                    {character.id === currentCharacter.id
                      ? <span children={character.name} />
                      : (
                          <Link
                            children={character.name}
                            className="outline-none pointer-events-auto before:absolute before:inset-0 before:-z-1"
                            target="_blank"
                            to={Paths.Character(character.id)}
                          />
                        )}
                  </div>
                );
              })}
            </TableCell>
            <TableCell className="text-center divide-y divide-dashed">
              {team.slot2.map((value) => {
                const character = characters.find(c => c.id == value)!;

                return (
                  <div
                    className="relative z-0 p-2 space-y-1 transition-colors duration-100 pointer-events-none has-[a:focus-visible]:ring-[3px] has-[a:focus-visible]:ring-ring/50 has-[a:hover]:ring-[3px] has-[a:hover]:ring-ring/50"
                    key={value}
                  >
                    <CharacterImage
                      alt={character.name}
                      className="mx-auto size-12.5"
                      src={character.imageWithElementAndRank ?? character.image}
                    />
                    {character.id === currentCharacter.id
                      ? <span children={character.name} />
                      : (
                          <Link
                            children={character.name}
                            className="outline-none pointer-events-auto before:absolute before:inset-0 before:-z-1"
                            target="_blank"
                            to={Paths.Character(character.id)}
                          />
                        )}
                  </div>
                );
              })}
            </TableCell>
            <TableCell className="text-center divide-y divide-dashed">
              {team.slot3.map((value) => {
                const character = characters.find(c => c.id == value)!;

                return (
                  <div
                    className="relative z-0 p-2 space-y-1 transition-colors duration-100 pointer-events-none has-[a:focus-visible]:ring-[3px] has-[a:focus-visible]:ring-ring/50 has-[a:hover]:ring-[3px] has-[a:hover]:ring-ring/50"
                    key={value}
                  >
                    <CharacterImage
                      alt={character.name}
                      className="mx-auto size-12.5"
                      src={character.imageWithElementAndRank ?? character.image}
                    />
                    {character.id === currentCharacter.id
                      ? <span children={character.name} />
                      : (
                          <Link
                            children={character.name}
                            className="outline-none pointer-events-auto before:absolute before:inset-0 before:-z-1"
                            target="_blank"
                            to={Paths.Character(character.id)}
                          />
                        )}
                  </div>
                );
              })}
            </TableCell>
            <TableCell className="text-center divide-y divide-dashed">
              {team.slot4.map((value) => {
                const character = characters.find(c => c.id == value)!;

                return (
                  <div
                    className="relative z-0 p-2 space-y-1 transition-colors duration-100 pointer-events-none has-[a:focus-visible]:ring-[3px] has-[a:focus-visible]:ring-ring/50 has-[a:hover]:ring-[3px] has-[a:hover]:ring-ring/50"
                    key={value}
                  >
                    <CharacterImage
                      alt={character.name}
                      className="mx-auto size-12.5"
                      src={character.imageWithElementAndRank ?? character.image}
                    />
                    {character.id === currentCharacter.id
                      ? <span children={character.name} />
                      : (
                          <Link
                            children={character.name}
                            className="outline-none pointer-events-auto before:absolute before:inset-0 before:-z-1"
                            target="_blank"
                            to={Paths.Character(character.id)}
                          />
                        )}
                  </div>
                );
              })}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
const CharacterBuildGuideRecommendedArcs: FC<{ buildGuide: BuildGuide }> = ({ buildGuide }) => {
  const arcs = useAppSelector(state => state.arcs.list);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Приоритет</TableHead>
          <TableHead className="text-center">Дуга</TableHead>
          <TableHead className="text-center">Эффект</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {buildGuide.recommendedArcs.map((recommendedArc, index) => {
          const arc = arcs.find(a => a.id === recommendedArc.id)!;

          return (
            <TableRow
              className="relative z-0 pointer-events-none has-[a:focus-visible]:bg-muted/50"
              key={recommendedArc.id}
            >
              <TableCell children={index + 1} className="text-center" />
              <TableHead className="p-3 space-y-1 text-center">
                <ArcImage alt={arc.name} className="mx-auto size-12.5" src={arc.image} />
                <Link
                  children={arc.name}
                  className="outline-none pointer-events-auto before:absolute before:inset-0 before:-z-1"
                  target="_blank"
                  to={Paths.Arc(arc.id)}
                />
              </TableHead>
              <TableCell className="whitespace-pre-line">
                {arc.effect && (
                  <>
                    <span
                      children={arc.effect.title}
                      className="font-medium tracking-wider text-muted-foreground uppercase"
                    />
                    <br />
                    {arc.effect.text}
                  </>
                )}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
const CharacterBuildGuideRecommendedCartridgesAndBestStats: FC<{ buildGuide: BuildGuide }> = ({ buildGuide }) => {
  const cartridges = useAppSelector(state => state.cartridges.list);

  const maxSubStatsPriority = useMemo(() => {
    return Math.max(...buildGuide.bestSubStats.map(stat => stat.priority));
  }, [buildGuide.bestSubStats]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Приоритет</TableHead>
          <TableHead className="text-center">Картридж</TableHead>
          <TableHead className="text-center">Эффекты</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {buildGuide.recommendedCartridges.map((recommendedCartridge, index) => {
          const cartridge = cartridges.find(c => c.id === recommendedCartridge.id)!;

          return (
            <TableRow
              className="relative z-0 pointer-events-none has-[a:focus-visible]:bg-muted/50"
              key={recommendedCartridge.id}
            >
              <TableCell children={index + 1} className="text-center" />
              <TableHead className="p-3 space-y-1 text-center">
                <CartridgeImage alt={cartridge.name} className="mx-auto size-12.5" src={cartridge.image} />
                <Link
                  children={cartridge.name}
                  className="outline-none pointer-events-auto before:absolute before:inset-0 before:-z-1"
                  target="_blank"
                  to={Paths.Cartridge(cartridge.id)}
                />
              </TableHead>
              <TableCell className="whitespace-pre-line">
                <p>
                  <span className="font-medium tracking-wider text-muted-foreground uppercase">Эпический (2):</span>
                  {` ${cartridge.setEffects["2"]}`}
                </p>
                <p>
                  <span className="font-medium tracking-wider text-muted-foreground uppercase">Легендарный (4):</span>
                  {` ${cartridge.setEffects["4"]}`}
                </p>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableHead className="text-center" colSpan={2}>Лучший главный атрибут картриджа</TableHead>
          <TableCell>
            <ul className="pl-5 list-outside list-disc">
              {buildGuide.cartridgeBestMainStat.map(stat => <li key={stat}>{stat}</li>)}
            </ul>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="text-center" colSpan={2}>Доп. атрибуты</TableHead>
          <TableCell>
            <ul className="pl-5 list-outside list-disc">
              {buildGuide.bestSubStats.map(stat => (
                <li key={stat.value}>
                  {stat.value}
                  {" "}
                  {Array.from({ length: maxSubStatsPriority - stat.priority + 1 }).map(() => "★").join("")}
                </li>
              ))}
            </ul>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
const CharacterBuildGuideRecommendedAwakeningSkills: FC<{
  buildGuide: BuildGuide;
  character: Character;
}> = ({ buildGuide, character }) => {
  const maxPriority = useMemo(() => {
    return Math.max(
      ...Object.values(buildGuide.recommendedAwakeningSkills)
        .filter(recommendation => !!recommendation)
        .map(recommendation => recommendation.priority),
    );
  }, [buildGuide.recommendedAwakeningSkills]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Навык пробуждения</TableHead>
          <TableHead className="text-center">Приоритет</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {(Object.entries(buildGuide.recommendedAwakeningSkills) as [CharacterAwakeningSkillKey, RecommendedSkill][])
          .sort((a, b) => a[1].priority - b[1].priority)
          .map(([skillKey, recommendation]) => (
            <TableRow key={skillKey}>
              <TableCell
                children={character.awakeningSkills ? `${character.awakeningSkills[skillKey]} (${skillKey})` : skillKey}
                className="text-center"
              />
              <TableCell
                children={Array.from({ length: maxPriority - recommendation.priority + 1 }).map(() => "★").join("")}
                className="text-center"
              />
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};
const CharacterBuildGuideRecommendedSkills: FC<{
  character: Character;
  recommendedSkills: NonNullable<BuildGuide["recommendedSkills"]>;
}> = ({ character, recommendedSkills }) => {
  const maxPriority = useMemo(() => {
    return Math.max(
      ...Object.values(recommendedSkills)
        .filter(recommendation => !!recommendation)
        .map(recommendation => recommendation.priority),
    );
  }, [recommendedSkills]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Навык</TableHead>
          <TableHead className="text-center">Приоритет</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {(Object.entries(recommendedSkills) as [CharacterSkillKey, RecommendedSkill][])
          .sort((a, b) => a[1].priority - b[1].priority)
          .map(([skillKey, recommendation]) => (
            <TableRow key={skillKey}>
              <TableCell
                children={character.skills ? `${character.skills[skillKey]} (${CharacterSkillKeys[skillKey]})` : CharacterSkillKeys[skillKey]}
                className="text-center"
              />
              <TableCell
                children={Array.from({ length: maxPriority - recommendation.priority + 1 }).map(() => "★").join("")}
                className="text-center"
              />
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default CharacterBuildGuide;
