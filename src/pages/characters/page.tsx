import type { FC } from "react";
import { Link } from "react-router";

import { useCharacters, useCharactersFilter } from "./hooks";
import CharactersLayout from "./layout";
import { ArcTypeImage, CharacterImage, CharacterRoleImage, ElementImage, RankImage } from "@/components/image";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import PATHS from "@/paths";

const CharactersPage: FC = () => {
  const { characters, charactersLoading } = useCharacters();
  const {
    arcTypes, arcTypesLoading, characterRoles, characterRolesLoading, elements, elementsLoading, filter,
    filteredCharacters, handleFilterChange, ranks, ranksLoading,
  } = useCharactersFilter(characters);

  if (arcTypesLoading || characterRolesLoading || charactersLoading || elementsLoading || ranksLoading) {
    return (
      <CharactersLayout>
        <div>Loading...</div>
      </CharactersLayout>
    );
  }

  return (
    <CharactersLayout>
      <Card size="sm">
        <CardHeader>
          <CardTitle>Фильтр</CardTitle>
        </CardHeader>
        <CardContent>
          <FieldGroup className="flex-row flex-wrap gap-x-5 gap-y-4 justify-evenly *:data-[slot=field]:gap-2">
            <Field className="w-auto">
              <FieldLabel>Редкость</FieldLabel>
              <ToggleGroup
                onValueChange={value => handleFilterChange(prev => ({
                  ...prev,
                  rankIds: value as typeof filter.rankIds,
                }))}
                size="sm"
                type="multiple"
                value={filter.rankIds}
                variant="outline"
              >
                <ButtonGroup>
                  {ranks.map(rank => (
                    <ToggleGroupItem aria-label={`${rank.name}-ранг`} key={rank.id} value={rank.id}>
                      <RankImage alt={`${rank.name}-ранг`} className="shrink-0 size-6" src={rank.image} />
                    </ToggleGroupItem>
                  ))}
                </ButtonGroup>
              </ToggleGroup>
            </Field>
            <Field className="w-auto">
              <FieldLabel>Элемент</FieldLabel>
              <ToggleGroup
                onValueChange={value => handleFilterChange(prev => ({
                  ...prev,
                  elementIds: value as typeof filter.elementIds,
                }))}
                size="sm"
                type="multiple"
                value={filter.elementIds}
                variant="outline"
              >
                <ButtonGroup>
                  {elements.map(element => (
                    <ToggleGroupItem aria-label={element.name} key={element.id} value={element.id}>
                      <ElementImage alt={element.name} className="shrink-0 size-6" src={element.image} />
                    </ToggleGroupItem>
                  ))}
                </ButtonGroup>
              </ToggleGroup>
            </Field>
            <Field className="w-auto">
              <FieldLabel>Совместимость с дугой</FieldLabel>
              <ToggleGroup
                onValueChange={value => handleFilterChange(prev => ({
                  ...prev,
                  arcTypeIds: value as typeof filter.arcTypeIds,
                }))}
                size="sm"
                type="multiple"
                value={filter.arcTypeIds}
                variant="outline"
              >
                <ButtonGroup>
                  {arcTypes.map(arcType => (
                    <ToggleGroupItem aria-label={arcType.name} key={arcType.id} value={arcType.id}>
                      <ArcTypeImage alt={arcType.name} className="shrink-0 size-6" src={arcType.image} />
                    </ToggleGroupItem>
                  ))}
                </ButtonGroup>
              </ToggleGroup>
            </Field>
            <Field className="w-auto">
              <FieldLabel>Боевая роль</FieldLabel>
              <ToggleGroup
                onValueChange={value => handleFilterChange(prev => ({
                  ...prev,
                  characterRoleIds: value as typeof filter.characterRoleIds,
                }))}
                size="sm"
                type="multiple"
                value={filter.characterRoleIds}
                variant="outline"
              >
                <ButtonGroup>
                  {characterRoles.map(characterRole => (
                    <ToggleGroupItem aria-label={characterRole.name} key={characterRole.id} value={characterRole.id}>
                      <CharacterRoleImage
                        alt={characterRole.name}
                        className="shrink-0 size-6"
                        src={characterRole.image}
                      />
                    </ToggleGroupItem>
                  ))}
                </ButtonGroup>
              </ToggleGroup>
            </Field>
          </FieldGroup>
        </CardContent>
      </Card>
      <div className="grid grid-cols-[repeat(auto-fit,--spacing(45.5))] gap-4 justify-center md:gap-6">
        {filteredCharacters.map(character => (
          <Card
            className={cn([
              "relative z-0 transition-colors duration-100 pointer-events-none has-[a:focus-visible]:ring-[3px]",
              "has-[a:focus-visible]:ring-ring/50 has-[a:hover]:bg-card/50",
            ])}
            key={character.id}
            size="sm"
          >
            <CardContent>
              <CharacterImage
                alt={character.name}
                className="mx-auto size-35.5"
                src={character.imageWithElementAndRank ?? character.image}
              />
            </CardContent>
            <CardHeader>
              <CardTitle className="text-sm text-center whitespace-normal">
                <Link
                  children={character.name}
                  className="outline-none pointer-events-auto before:absolute before:inset-0 before:-z-1"
                  to={PATHS.Character(character.id)}
                />
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </CharactersLayout>
  );
};

export default CharactersPage;
