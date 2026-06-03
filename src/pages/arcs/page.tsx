import { type FC, Fragment } from "react";
import { Link } from "react-router";

import { useArcs, useArcsFilter } from "./hooks";
import ArcsLayout from "./layout";
import { ArcImage, ArcTypeImage, RankImage } from "@/components/image";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Combobox, ComboboxChip, ComboboxChips, ComboboxChipsInput, ComboboxContent, ComboboxEmpty, ComboboxItem, ComboboxList,
  ComboboxValue,
} from "@/components/ui/combobox";
import { useComboboxAnchor } from "@/components/ui/combobox.hooks";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import PATHS from "@/paths";

const ArcsPage: FC = () => {
  const { arcs, arcsLoading } = useArcs();
  const {
    arcTypes, arcTypesLoading, filter, filteredArcs, handleFilterChange, ranks, ranksLoading, subStats,
  } = useArcsFilter(arcs);
  const subStatsComboboxAnchor = useComboboxAnchor();

  if (arcTypesLoading || arcsLoading || ranksLoading) {
    return (
      <ArcsLayout>
        <div>Loading...</div>
      </ArcsLayout>
    );
  }

  return (
    <ArcsLayout>
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
            <Field className="w-auto md:w-85.75">
              <FieldLabel>Доп. атрибут</FieldLabel>
              <Combobox
                items={subStats}
                multiple
                onValueChange={value => handleFilterChange(prev => ({
                  ...prev,
                  subStats: value as typeof filter.subStats,
                }))}
                value={filter.subStats}
              >
                <ComboboxChips
                  className={cn([
                    "px-4 py-1 min-h-9 border-input focus-within:border-ring focus-within:ring-3",
                    "focus-within:ring-ring/30 has-aria-invalid:border-destructive has-aria-invalid:ring-3",
                    "has-aria-invalid:ring-destructive/20 has-data-[slot=combobox-chip]:px-1",
                    "dark:has-aria-invalid:border-destructive/50",
                  ])}
                  ref={subStatsComboboxAnchor}
                >
                  <ComboboxValue>
                    {values => (
                      <Fragment>
                        {values.map((value: string) => <ComboboxChip children={value} key={value} />)}
                        <ComboboxChipsInput />
                      </Fragment>
                    )}
                  </ComboboxValue>
                </ComboboxChips>
                <ComboboxContent anchor={subStatsComboboxAnchor}>
                  <ComboboxEmpty>No items found.</ComboboxEmpty>
                  <ComboboxList>
                    {item => <ComboboxItem children={item} key={item} value={item} />}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </Field>
          </FieldGroup>
        </CardContent>
      </Card>
      {/* <Table containerClassName="text-card-foreground bg-card shadow-sm ring-1 ring-foreground/5">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Дуга</TableHead>
            <TableHead className="text-center">Тип</TableHead>
            <TableHead className="text-center">Доп. атрибут (макс.)</TableHead>
            <TableHead className="text-center">Эффект</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredArcs.map((arc) => {
            const arcType = arcTypes.find(arcType => arcType.id === arc.typeId)!;

            return (
              <TableRow className="relative z-0 pointer-events-none has-[a:focus-visible]:bg-muted/50" key={arc.id}>
                <TableHead className="p-3 text-center whitespace-normal">
                  <div className="space-y-1">
                    <ArcImage alt={arc.name} className="mx-auto size-15" src={arc.image} />
                    <Link
                      children={arc.name}
                      className="outline-none pointer-events-auto before:absolute before:inset-0 before:-z-1"
                      to={PATHS.Arc(arc.id)}
                    />
                  </div>
                </TableHead>
                <TableCell className="text-center">
                  <div className="space-y-1">
                    <ArcTypeImage alt={arcType.name} className="mx-auto size-7.5" src={arcType.image} />
                    <span children={arcType.name} />
                  </div>
                </TableCell>
                <TableCell children={`${arc.subStat} +${arc.subStat80}`} className="text-center whitespace-normal" />
                <TableCell className="whitespace-pre-line">
                  <span
                    children={arc.effect.title}
                    className="font-medium tracking-wider text-muted-foreground uppercase"
                  />
                  <br />
                  {arc.effect.text}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table> */}
      <div className="grid grid-cols-[repeat(auto-fit,--spacing(45.5))] gap-4 justify-center md:gap-6">
        {filteredArcs.map(arc => (
          <Card
            className="relative z-0 transition-colors duration-100 pointer-events-none has-[a:focus-visible]:ring-[3px] has-[a:focus-visible]:ring-ring/50 has-[a:hover]:bg-card/50"
            key={arc.id}
            size="sm"
          >
            <CardContent>
              <ArcImage alt={arc.name} className="mx-auto size-35.5" src={arc.image} />
            </CardContent>
            <CardHeader>
              <CardTitle className="text-sm text-center whitespace-normal">
                <Link
                  children={arc.name}
                  className="outline-none pointer-events-auto before:absolute before:inset-0 before:-z-1"
                  to={PATHS.Arc(arc.id)}
                />
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </ArcsLayout>
  );
};

export default ArcsPage;
