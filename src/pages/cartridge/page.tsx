import { type FC, type ReactNode, useEffect } from "react";
import { Link, useParams } from "react-router";

import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { useCartridge } from "@/hooks/use-cartridge";
import { useModules } from "@/hooks/use-modules";
import PATHS from "@/paths";
import type { Cartridge } from "@/types/cartridges";

const CartridgeLayout: FC<{ children?: ReactNode; title?: string }> = ({ children, title = "..." }) => {
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
            <BreadcrumbLink asChild>
              <Link to={PATHS.Cartridges}>Картриджи</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {children}
    </div>
  );
};
const CartridgePage: FC = () => {
  const params = useParams<{ cartridgeId: Cartridge["id"] }>();
  const { data: cartridge, fetch: fetchCartridge, loading: cartridgeLoading } = useCartridge(params.cartridgeId!);
  const { data: modules, fetch: fetchModules, loading: modulesLoading } = useModules();

  useEffect(() => {
    fetchCartridge();
    fetchModules();
  }, []);

  if (!cartridge || cartridgeLoading || modulesLoading) {
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
            <TableHead className="text-center" colSpan={2}>{cartridge.name}</TableHead>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              <img alt={cartridge.name} className="aspect-square mx-auto size-18.75" src={cartridge.image} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-center">Необходимые модули</TableHead>
            <TableCell>
              <div className="flex justify-center items-center">
                {cartridge.requiredModuleIds.map((moduleId) => {
                  const module = modules.find(module => module.id === moduleId)!;

                  return (
                    <img
                      alt={moduleId}
                      className="aspect-square shrink-0 size-7.5"
                      key={moduleId}
                      src={module.image}
                    />
                  );
                })}
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-center">Эпический (2)</TableHead>
            <TableCell className="whitespace-normal">{cartridge.setEffects["2"]}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="text-center">Легендарный (4)</TableHead>
            <TableCell className="whitespace-normal">{cartridge.setEffects["4"]}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CartridgeLayout>
  );
};

export default CartridgePage;
