import type { ComponentProps, FC } from "react";
import { Link } from "react-router";

import { ShieldIcon, SwordsIcon, UsersRoundIcon } from "@/components/ui/icon";
import type { IconProps } from "@/components/ui/icon.types";
import { Item, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item";
import PATHS from "@/paths";

interface Section {
  icon: IconProps;
  title: string;
  description?: string;
  to: ComponentProps<typeof Link>["to"];
}

const SECTIONS: Array<Section> = [
  { icon: UsersRoundIcon, title: "Персонажи", description: "Список всех персонажей", to: PATHS.Characters },
  { icon: SwordsIcon, title: "Дуги", description: "Список всего оружия", to: PATHS.Arcs },
  { icon: ShieldIcon, title: "Картриджи", description: "Список всего снаряжения", to: PATHS.Cartridges },
];

const HomePage: FC = () => {
  return (
    <ItemGroup>
      {SECTIONS.map(section => (
        <Item asChild className="bg-background [a]:hover:bg-background/50" key={section.title}>
          <Link to={section.to}>
            <ItemMedia variant="icon">
              <section.icon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle children={section.title} />
              {section.description && <ItemDescription children={section.description} />}
            </ItemContent>
          </Link>
        </Item>
      ))}
    </ItemGroup>
  );
};

export default HomePage;
