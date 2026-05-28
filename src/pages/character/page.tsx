import type { FC } from "react";
import { useParams } from "react-router";

import CharacterBuildGuide from "./build-guide";
import { useCharacter } from "./hooks";
import CharacterLayout from "./layout";
import { ArcTypeImage, CharacterImage, CharacterRoleImage, ElementImage, RankImage } from "@/components/image";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import type { Character } from "@/types/characters";

const CharacterPage: FC = () => {
  const params = useParams<{ characterId: Character["id"] }>();
  const { arcType, character, characterRole, element, loading, rank } = useCharacter(params.characterId!);

  if (loading || !character || !element || !rank) {
    return (
      <CharacterLayout>
        <div>Loading...</div>
      </CharacterLayout>
    );
  }

  return (
    <CharacterLayout title={character.name}>
      <Table className="text-card-foreground bg-card shadow-sm ring-1 ring-foreground/5 table-fixed">
        <TableBody>
          <TableRow>
            <TableHead className="space-y-1 text-center" rowSpan={4}>
              <CharacterImage alt={character.name} className="mx-auto size-23" src={character.image} />
              <span children={character.name} />
            </TableHead>
            <TableHead className="text-center">Ранг</TableHead>
            <TableCell className="space-y-1 text-center">
              <RankImage alt={rank.name} className="mx-auto size-7.5" src={rank.image} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-center">Элемент</TableHead>
            <TableCell className="space-y-1 text-center">
              <ElementImage alt={element.name} className="mx-auto size-7.5" src={element.image} />
              <span children={element.name} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-center">Тип дуги</TableHead>
            <TableCell className="space-y-1 text-center">
              {arcType
                ? (
                    <>
                      <ArcTypeImage alt={arcType.name} className="mx-auto size-7.5" src={arcType.image} />
                      <span children={arcType.name} />
                    </>
                  )
                : (
                    <span className="text-destructive">Подлежит определению</span>
                  )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-center">Роль</TableHead>
            <TableCell className="space-y-1 text-center">
              {characterRole
                ? (
                    <>
                      <CharacterRoleImage
                        alt={characterRole.name}
                        className="mx-auto size-7.5"
                        src={characterRole.image}
                      />
                      <span children={characterRole.name} />
                    </>
                  )
                : (
                    <span className="text-destructive">Подлежит определению</span>
                  )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <CharacterBuildGuide character={character} />
    </CharacterLayout>
  );
};

export default CharacterPage;
