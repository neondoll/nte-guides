import type { FC } from "react";
import { Link } from "react-router";

import { useCartridges } from "./hooks";
import CartridgesLayout from "./layout";
import { CartridgeImage } from "@/components/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PATHS from "@/paths";

const CartridgesPage: FC = () => {
  const { cartridges, cartridgesLoading } = useCartridges();

  if (cartridgesLoading) {
    return (
      <CartridgesLayout>
        <div>Loading...</div>
      </CartridgesLayout>
    );
  }

  return (
    <CartridgesLayout>
      <div className="grid grid-cols-[repeat(auto-fit,--spacing(45.5))] gap-4 justify-center md:gap-6">
        {cartridges.map(cartridge => (
          <Card
            className="relative z-0 transition-colors duration-100 pointer-events-none has-[a:focus-visible]:ring-[3px] has-[a:focus-visible]:ring-ring/50 has-[a:hover]:bg-card/50"
            key={cartridge.id}
            size="sm"
          >
            <CardContent>
              <CartridgeImage alt={cartridge.name} className="mx-auto size-35.5" src={cartridge.image} />
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
