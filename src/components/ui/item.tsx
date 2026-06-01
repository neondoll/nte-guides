import { Slot } from "radix-ui";

import type {
  ItemActionsProps, ItemContentProps, ItemDescriptionProps, ItemFooterProps, ItemGroupProps, ItemHeaderProps,
  ItemMediaProps, ItemProps, ItemSeparatorProps, ItemTitleProps,
} from "./item.types";
import { itemMediaVariants, itemVariants } from "./item.variants";
import { Separator } from "./separator";
import { cn } from "@/lib/utils";

export function Item({ asChild = false, className, size = "default", variant = "default", ...props }: ItemProps) {
  const Comp = asChild ? Slot.Root : "div";

  return (
    <Comp
      className={cn(itemVariants({ className, size, variant }))}
      data-size={size}
      data-slot="item"
      data-variant={variant}
      {...props}
    />
  );
}

export function ItemActions({ className, ...props }: ItemActionsProps) {
  return (
    <div
      className={cn(["flex items-center gap-2"], className)}
      data-slot="item-actions"
      {...props}
    />
  );
}

export function ItemContent({ className, ...props }: ItemContentProps) {
  return (
    <div
      className={cn([
        "flex flex-1 flex-col gap-1 group-data-[size=xs]/item:gap-0.5 [&+[data-slot=item-content]]:flex-none",
      ], className)}
      data-slot="item-content"
      {...props}
    />
  );
}

export function ItemDescription({ className, ...props }: ItemDescriptionProps) {
  return (
    <p
      className={cn([
        "line-clamp-2 text-left text-sm leading-relaxed font-normal text-muted-foreground [&>a]:underline",
        "[&>a]:underline-offset-4 [&>a:hover]:text-primary",
      ], className)}
      data-slot="item-description"
      {...props}
    />
  );
}

export function ItemFooter({ className, ...props }: ItemFooterProps) {
  return (
    <div
      className={cn(["flex basis-full items-center justify-between gap-2"], className)}
      data-slot="item-footer"
      {...props}
    />
  );
}

export function ItemGroup({ className, ...props }: ItemGroupProps) {
  return (
    <div
      className={cn([
        "group/item-group flex w-full flex-col gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2",
      ], className)}
      data-slot="item-group"
      role="list"
      {...props}
    />
  );
}

export function ItemHeader({ className, ...props }: ItemHeaderProps) {
  return (
    <div
      className={cn(["flex basis-full items-center justify-between gap-2"], className)}
      data-slot="item-header"
      {...props}
    />
  );
}

export function ItemMedia({ className, variant = "default", ...props }: ItemMediaProps) {
  return (
    <div
      className={cn(itemMediaVariants({ className, variant }))}
      data-slot="item-media"
      data-variant={variant}
      {...props}
    />
  );
}

export function ItemSeparator({ className, ...props }: ItemSeparatorProps) {
  return (
    <Separator
      className={cn(["my-2"], className)}
      data-slot="item-separator"
      orientation="horizontal"
      {...props}
    />
  );
}

export function ItemTitle({ className, ...props }: ItemTitleProps) {
  return (
    <div
      className={cn([
        "line-clamp-1 flex w-fit items-center gap-2 text-xs leading-snug font-semibold uppercase underline-offset-4",
      ], className)}
      data-slot="item-title"
      {...props}
    />
  );
}
