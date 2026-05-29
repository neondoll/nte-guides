import type { FC } from "react";
import { useParams } from "react-router";

import ArcGuide from "./guide";
import { useArc } from "./hooks";
import ArcLayout from "./layout";
import { ArcImage, ArcTypeImage, RankImage } from "@/components/image";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import type { Arc } from "@/types/arcs";

const ArcPage: FC = () => {
  const params = useParams<{ arcId: Arc["id"] }>();
  const { arc, loading, rank, type } = useArc(params.arcId!);

  if (loading || !arc || !rank || !type) {
    return (
      <ArcLayout>
        <div>Loading...</div>
      </ArcLayout>
    );
  }

  return (
    <ArcLayout title={arc.name}>
      <Table className="text-card-foreground bg-card shadow-sm ring-1 ring-foreground/5 table-fixed">
        <TableBody>
          <TableRow>
            <TableHead children={arc.name} className="text-center" colSpan={2} />
          </TableRow>
          {arc.image && (
            <TableRow>
              <TableCell colSpan={2}>
                <ArcImage alt={arc.name} className="mx-auto size-20" src={arc.image} />
              </TableCell>
            </TableRow>
          )}
          <TableRow>
            <TableHead className="text-center">Редкость</TableHead>
            <TableCell className="text-center space-y-1">
              <RankImage alt={rank.name} className="mx-auto size-7.5" src={rank.image} />
              <span children={`Ранг ${rank.name}`} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-center">Базовый АТК (макс.)</TableHead>
            <TableCell children={arc.baseATK80} className="text-center space-y-1" />
          </TableRow>
          <TableRow>
            <TableHead className="text-center">Доп. атрибут (макс.)</TableHead>
            <TableCell children={`${arc.substat} +${arc.substat80}`} className="text-center space-y-1" />
          </TableRow>
          <TableRow>
            <TableHead className="text-center">Тип</TableHead>
            <TableCell className="text-center space-y-1">
              <ArcTypeImage alt={type.name} className="mx-auto size-7.5" src={type.image} />
              <span children={type.name} />
            </TableCell>
          </TableRow>
          {arc.effect && (
            <>
              <TableRow>
                <TableHead className="text-center" colSpan={2}>Эффект</TableHead>
              </TableRow>
              <TableRow>
                <TableCell className="space-y-2 divide-y divide-dashed *:pb-2 [&>*:last-child]:pb-0" colSpan={2}>
                  <p className="font-medium tracking-wider text-center text-muted-foreground uppercase">{arc.effect.title}</p>
                  <p className="whitespace-pre-line">{arc.effect.text}</p>
                </TableCell>
              </TableRow>
            </>
          )}
        </TableBody>
      </Table>
      <ArcGuide arc={arc} />
    </ArcLayout>
  );
};

export default ArcPage;
