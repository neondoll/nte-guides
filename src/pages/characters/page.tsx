import { type FC, type ReactNode, useEffect } from "react";
import { Link } from "react-router";

import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCharacters } from "@/hooks/use-characters";
import PATHS from "@/paths";

const CharactersLayout: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className="space-y-4 md:space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={PATHS.Home}>Главная</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Персонажи</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {children}
    </div>
  );
};
const CharactersPage: FC = () => {
  const { data, fetch, loading } = useCharacters();

  useEffect(() => {
    fetch();
  }, []);

  if (loading) {
    return (
      <CharactersLayout>
        <div>Loading...</div>
      </CharactersLayout>
    );
  }

  return (
    <CharactersLayout>
      <div className="grid grid-cols-[repeat(auto-fit,--spacing(47.5))] gap-4 justify-center md:gap-6">
        {data.map(item => (
          <Card key={item.id} size="sm">
            <CardContent>
              <img
                alt={item.name}
                className="aspect-square size-37.5"
                src={item.imageWithElementAndRank ?? item.image}
              />
            </CardContent>
            <CardHeader>
              <CardTitle className="text-base text-center whitespace-nowrap">{item.name}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </CharactersLayout>
  );
};

export default CharactersPage;
