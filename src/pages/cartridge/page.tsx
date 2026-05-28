import type { FC } from "react";
import { useParams } from "react-router";

import { useCartridge } from "./hooks";
import CartridgeLayout from "./layout";
import { CartridgeImage, ModuleImage } from "@/components/image";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import type { Cartridge } from "@/types/cartridges";

const CartridgePage: FC = () => {
  const params = useParams<{ cartridgeId: Cartridge["id"] }>();
  const { cartridge, loading, requiredModules } = useCartridge(params.cartridgeId!);

  if (loading || !cartridge || !requiredModules) {
    return (
      <CartridgeLayout>
        <div>Loading...</div>
      </CartridgeLayout>
    );
  }

  return (
    <CartridgeLayout title={cartridge.name}>
      <Table className="text-card-foreground bg-card shadow-sm ring-1 ring-foreground/5 table-fixed">
        <TableBody>
          <TableRow>
            <TableHead children={cartridge.name} className="text-center" colSpan={2} />
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              <CartridgeImage alt={cartridge.name} className="mx-auto size-20" src={cartridge.image} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-center">Необходимые модули</TableHead>
            <TableCell>
              <div className="flex gap-1 justify-center items-center">
                {requiredModules.map(requiredModule => (
                  <ModuleImage
                    alt={requiredModule.id}
                    className="shrink-0 size-7.5"
                    key={requiredModule.id}
                    src={requiredModule.image}
                  />
                ))}
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-center">Эпический (2)</TableHead>
            <TableCell children={cartridge.setEffects["2"]} className="whitespace-normal" />
          </TableRow>
          <TableRow>
            <TableHead className="text-center">Легендарный (4)</TableHead>
            <TableCell children={cartridge.setEffects["4"]} className="whitespace-normal" />
          </TableRow>
        </TableBody>
      </Table>
    </CartridgeLayout>
  );
};

export default CartridgePage;
