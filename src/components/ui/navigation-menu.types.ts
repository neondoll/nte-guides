import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui";
import type { ComponentProps } from "react";

export type NavigationMenuProps = ComponentProps<typeof NavigationMenuPrimitive.Root> & { viewport?: boolean };
export type NavigationMenuContentProps = ComponentProps<typeof NavigationMenuPrimitive.Content>;
export type NavigationMenuIndicatorProps = ComponentProps<typeof NavigationMenuPrimitive.Indicator>;
export type NavigationMenuItemProps = ComponentProps<typeof NavigationMenuPrimitive.Item>;
export type NavigationMenuLinkProps = ComponentProps<typeof NavigationMenuPrimitive.Link>;
export type NavigationMenuListProps = ComponentProps<typeof NavigationMenuPrimitive.List>;
export type NavigationMenuTriggerProps = ComponentProps<typeof NavigationMenuPrimitive.Trigger>;
export type NavigationMenuViewportProps = ComponentProps<typeof NavigationMenuPrimitive.Viewport>;
