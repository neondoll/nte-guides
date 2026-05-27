import type { FC } from "react";
import { Link } from "react-router";

import { useCharacters } from "./hooks";
import CharactersLayout from "./layout";
import { CharacterImage } from "@/components/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PATHS from "@/paths";

const CharactersPage: FC = () => {
  const { characters, loading } = useCharacters();

  if (loading) {
    return (
      <CharactersLayout>
        <div>Loading...</div>
      </CharactersLayout>
    );
  }

  return (
    <CharactersLayout>
      <div className="grid grid-cols-[repeat(auto-fit,--spacing(42))] gap-4 justify-center md:gap-6">
        {characters.map(character => (
          <Card
            className="relative z-0 transition-colors duration-100 pointer-events-none has-[a:focus-visible]:ring-[3px] has-[a:focus-visible]:ring-ring/50 has-[a:hover]:bg-card/50"
            key={character.id}
            size="sm"
          >
            <CardContent>
              <CharacterImage
                alt={character.name}
                className="mx-auto size-32"
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
