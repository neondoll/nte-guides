import type { FC } from "react";
import { Link } from "react-router";

import { useArcs } from "./hooks";
import ArcsLayout from "./layout";
import { ArcImage /* ArcTypeImage */ } from "@/components/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import PATHS from "@/paths";

const ArcsPage: FC = () => {
  const { /* arcTypes, */ arcs, loading } = useArcs();

  if (loading) {
    return (
      <ArcsLayout>
        <div>Loading...</div>
      </ArcsLayout>
    );
  }

  return (
    <ArcsLayout>
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
          {arcs.map((arc) => {
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
                <TableCell children={`${arc.substat} +${arc.substat80}`} className="text-center whitespace-normal" />
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
      </Table> */}
      <div className="grid grid-cols-[repeat(auto-fit,--spacing(45.5))] gap-4 justify-center md:gap-6">
        {arcs.map(arc => (
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
