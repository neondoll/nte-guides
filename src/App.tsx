import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import PATHS from "@/paths";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full bg-background">
        <div className="px-4 mx-auto container md:px-6">
          <div className="flex items-center h-14">
            <Button size="lg" variant="ghost">Neverness to Everness Guides</Button>
            <div className="flex gap-2 items-center ml-auto md:flex-1 md:justify-end">
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-muted">
        <div className="p-4 mx-auto container md:px-6 md:py-10">
          <Suspense>
            <Routes>
              <Route index path={PATHS.Home} Component={lazy(() => import("@/pages/home/page"))} />
              <Route path={PATHS.Arcs} Component={lazy(() => import("@/pages/arcs/page"))} />
              <Route path={PATHS.Arc(":arcId")} Component={lazy(() => import("@/pages/arc/page"))} />
              <Route path={PATHS.Cartridges} Component={lazy(() => import("@/pages/cartridges/page"))} />
              <Route path={PATHS.Cartridge(":cartridgeId")} Component={lazy(() => import("@/pages/cartridge/page"))} />
              <Route path={PATHS.Characters} Component={lazy(() => import("@/pages/characters/page"))} />
              <Route path={PATHS.Character(":characterId")} Component={lazy(() => import("@/pages/character/page"))} />
              <Route path={PATHS.NineHundredAndNinetyNineNights} Component={lazy(() => import("@/pages/999-nights/page"))} />
            </Routes>
          </Suspense>
        </div>
      </main>
      <footer className="flex flex-col gap-4 justify-center items-center py-4 text-sm text-muted-foreground bg-muted border-t">
        <p className="uppercase">Неофициальный фанатский проект</p>
        <div className="flex gap-2 justify-center items-center">
          <p>Смотрите также:</p>
          <ul className="flex gap-1 justify-center items-center">
            <li>
              <Button asChild size="xs" variant="link">
                <a href="https://neondoll.github.io/genshin-guides/" target="_blank">Genshin Impact Guides</a>
              </Button>
            </li>
            <li>
              <Button asChild size="xs" variant="link">
                <a href="https://neondoll.github.io/endfield-guides/" target="_blank">Arknights: Endfield Guides</a>
              </Button>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
