import type { FC } from "react";

import { useNineHundredAndNinetyNineNights } from "./hooks";
import NineHundredAndNinetyNineNightsLayout from "./layout";
import { CharacterImage } from "@/components/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleQuestionMarkIcon } from "@/components/ui/icon";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const NineHundredAndNinetyNineNightsPage: FC = () => {
  const {
    nineHundredAndNinetyNineNightsClasses,
    nineHundredAndNinetyNineNightsClassesLoading,
    nineHundredAndNinetyNineNightsEquipments,
    nineHundredAndNinetyNineNightsEquipmentsLoading,
  } = useNineHundredAndNinetyNineNights();

  if (nineHundredAndNinetyNineNightsClassesLoading || nineHundredAndNinetyNineNightsEquipmentsLoading) {
    return (
      <NineHundredAndNinetyNineNightsLayout>
        <div>Loading...</div>
      </NineHundredAndNinetyNineNightsLayout>
    );
  }

  return (
    <NineHundredAndNinetyNineNightsLayout>
      <div className="grid grid-cols-[repeat(auto-fit,--spacing(45.5))] gap-4 justify-center md:gap-6">
        {nineHundredAndNinetyNineNightsClasses.map(nineHundredAndNinetyNineNightsClass => (
          <Card
            className={cn([
              "relative z-0 transition-colors duration-100 pointer-events-none has-[a:focus-visible]:ring-[3px]",
              "has-[a:focus-visible]:ring-ring/50 has-[a:hover]:bg-card/50",
            ])}
            key={nineHundredAndNinetyNineNightsClass.id}
            size="sm"
          >
            <CardContent>
              <CharacterImage
                alt={nineHundredAndNinetyNineNightsClass.name}
                className="mx-auto size-35.5"
                src={nineHundredAndNinetyNineNightsClass.image}
              />
            </CardContent>
            <CardHeader>
              <CardTitle
                children={nineHundredAndNinetyNineNightsClass.name}
                className="text-sm text-center whitespace-pre-line"
              />
            </CardHeader>
          </Card>
        ))}
      </div>
      <Table containerClassName="text-card-foreground bg-card shadow-sm ring-1 ring-foreground/5">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Экипировка</TableHead>
            <TableHead className="text-center">Тип</TableHead>
            <TableHead className="text-center">Редкость</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {nineHundredAndNinetyNineNightsEquipments.map((nineHundredAndNinetyNineNightsEquipment) => {
            const nineHundredAndNinetyNineNightsClass = nineHundredAndNinetyNineNightsClasses.find(nineHundredAndNinetyNineNightsClass => nineHundredAndNinetyNineNightsClass.id === nineHundredAndNinetyNineNightsEquipment.classId);

            return (
              <TableRow key={nineHundredAndNinetyNineNightsEquipment.id}>
                <TableCell className="space-y-1 text-center">
                  {nineHundredAndNinetyNineNightsEquipment.image && (
                    <img
                      alt={nineHundredAndNinetyNineNightsEquipment.name}
                      className="mx-auto size-12.5"
                      src={nineHundredAndNinetyNineNightsEquipment.image}
                    />
                  )}
                  <p children={nineHundredAndNinetyNineNightsEquipment.name} />
                </TableCell>
                <TableCell children={nineHundredAndNinetyNineNightsEquipment.typeId} className="text-center" />
                <TableCell children={nineHundredAndNinetyNineNightsEquipment.rarity} className="text-center" />
                <TableCell className="space-y-2">
                  {nineHundredAndNinetyNineNightsClass && (
                    <>
                      <div className="flex gap-x-1 items-center">
                        <span>Класс:</span>
                        <div className="inline-flex gap-x-1 items-center">
                          <CharacterImage
                            alt={nineHundredAndNinetyNineNightsClass.name}
                            className="size-6.25"
                            src={nineHundredAndNinetyNineNightsClass.image}
                          />
                          <span children={nineHundredAndNinetyNineNightsClass.name} />
                        </div>
                      </div>
                      <hr />
                    </>
                  )}
                  {nineHundredAndNinetyNineNightsEquipment.baseStat && (
                    <>
                      <div className="flex gap-x-1 items-center">
                        <span>Базовый показатель:</span>
                        {nineHundredAndNinetyNineNightsEquipment.baseStat}
                      </div>
                      <hr />
                    </>
                  )}
                  <div>
                    <span>Эффекты:</span>
                    <ul className="pl-5 list-outside list-disc">
                      {nineHundredAndNinetyNineNightsEquipment.effects.map(effect => (
                        <li key={effect.title}>
                          <Tooltip>
                            <TooltipTrigger className="inline-flex gap-x-1 items-start underline">
                              <span children={effect.title} />
                              <CircleQuestionMarkIcon className="size-2.5" />
                            </TooltipTrigger>
                            <TooltipContent className="flex-col">
                              <p children={effect.title} />
                              <p children={effect.text} />
                            </TooltipContent>
                          </Tooltip>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </NineHundredAndNinetyNineNightsLayout>
  );
};

export default NineHundredAndNinetyNineNightsPage;
