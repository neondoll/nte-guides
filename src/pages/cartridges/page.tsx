import { type FC, type ReactNode, useEffect } from "react";
import { Link } from "react-router";

import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartridges } from "@/hooks/use-cartridges";
import PATHS from "@/paths";

const CartridgesLayout: FC<{ children?: ReactNode }> = ({ children }) => {
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
            <BreadcrumbPage>Картриджи</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {children}
    </div>
  );
};
const CartridgesPage: FC = () => {
  const { data, fetch, loading } = useCartridges();

  useEffect(() => {
    fetch();
  }, []);

  if (loading) {
    return (
      <CartridgesLayout>
        <div>Loading...</div>
      </CartridgesLayout>
    );
  }

  return (
    <CartridgesLayout>
      <div className="grid grid-cols-[repeat(auto-fit,--spacing(45.5))] gap-4 justify-center md:gap-6">
        {data.map(item => (
          <Card key={item.id} size="sm">
            <CardContent>
              <img
                alt={item.name}
                className="aspect-square mx-auto size-35.5 max-w-22 max-h-22"
                src={item.image ?? "images/currently-unavailable.png"}
              />
            </CardContent>
            <CardHeader>
              <CardTitle className="text-base text-center whitespace-normal">
                <Link to={PATHS.Cartridge(item.id)}>{item.name}</Link>
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </CartridgesLayout>
  );
};

export default CartridgesPage;
