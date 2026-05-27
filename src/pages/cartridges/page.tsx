import type { FC } from "react";
import { Link } from "react-router";

import { useCartridges } from "./hooks";
import CartridgesLayout from "./layout";
import { CartridgeImage /* ModuleImage */ } from "@/components/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import PATHS from "@/paths";

const CartridgesPage: FC = () => {
  const { cartridges, loading /* modules */ } = useCartridges();

  if (loading) {
    return (
      <CartridgesLayout>
        <div>Loading...</div>
      </CartridgesLayout>
    );
  }

  return (
    <CartridgesLayout>
      {/* <Table containerClassName="text-card-foreground bg-card shadow-sm ring-1 ring-foreground/5">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Картридж</TableHead>
            <TableHead className="text-center">Эффекты набора</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartridges.map((cartridge) => {
            const requiredModules = cartridge.requiredModuleIds.map(requiredModuleId => modules.find(module => module.id === requiredModuleId)!);

            return (
              <TableRow
                className="relative z-0 pointer-events-none has-[a:focus-visible]:bg-muted/50"
                key={cartridge.id}
              >
                <TableHead className="p-3 space-y-1 text-center">
                  <CartridgeImage alt={cartridge.name} className="mx-auto size-15" src={cartridge.image} />
                  <Link
                    children={cartridge.name}
                    className="outline-none pointer-events-auto before:absolute before:inset-0 before:-z-1"
                    to={PATHS.Cartridge(cartridge.id)}
                  />
                  <hr className="my-2 border-dashed" />
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
                </TableHead>
                <TableCell className="space-y-1 whitespace-normal">
                  <p>
                    <span className="font-medium tracking-wider text-muted-foreground uppercase">Эпический (2):</span>
                    {` ${cartridge.setEffects["2"]}`}
                  </p>
                  <p>
                    <span className="font-medium tracking-wider text-muted-foreground uppercase">Легендарный (4):</span>
                    {` ${cartridge.setEffects["4"]}`}
                  </p>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table> */}
      <div className="grid grid-cols-[repeat(auto-fit,--spacing(42))] gap-4 justify-center md:gap-6">
        {cartridges.map(cartridge => (
          <Card
            className="relative z-0 transition-colors duration-100 pointer-events-none has-[a:focus-visible]:ring-[3px] has-[a:focus-visible]:ring-ring/50 has-[a:hover]:bg-card/50"
            key={cartridge.id}
            size="sm"
          >
            <CardContent>
              <CartridgeImage alt={cartridge.name} className="mx-auto size-32" src={cartridge.image} />
            </CardContent>
            <CardHeader>
              <CardTitle className="text-sm text-center whitespace-normal">
                <Link
                  children={cartridge.name}
                  className="outline-none pointer-events-auto before:absolute before:inset-0 before:-z-1"
                  to={PATHS.Cartridge(cartridge.id)}
                />
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </CartridgesLayout>
  );
};

export default CartridgesPage;
