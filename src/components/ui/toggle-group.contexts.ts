import { createContext } from "react";

import type { ToggleGroupState } from "./toggle-group.types";

export const ToggleGroupContext = createContext<ToggleGroupState>({
  orientation: "horizontal",
  size: "default",
  spacing: 2,
  variant: "default",
});
