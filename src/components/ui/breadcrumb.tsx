import { Slot } from "radix-ui";

import type {
  BreadcrumbEllipsisProps, BreadcrumbItemProps, BreadcrumbLinkProps, BreadcrumbListProps, BreadcrumbPageProps,
  BreadcrumbProps, BreadcrumbSeparatorProps,
} from "./breadcrumb.types";
import { ChevronRightIcon, MoreHorizontalIcon } from "./icon";
import { cn } from "@/lib/utils";

export function Breadcrumb({ className, ...props }: BreadcrumbProps) {
  return <nav aria-label="breadcrumb" className={cn(className)} data-slot="breadcrumb" {...props} />;
}

export function BreadcrumbEllipsis({ className, ...props }: BreadcrumbEllipsisProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(["flex size-5 items-center justify-center [&>svg]:size-4"], className)}
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      {...props}
    >
      <MoreHorizontalIcon />
      <span className="sr-only">More</span>
    </span>
  );
}

export function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
  return <li className={cn(["inline-flex items-center gap-1.5"], className)} data-slot="breadcrumb-item" {...props} />;
}

export function BreadcrumbLink({ asChild, className, ...props }: BreadcrumbLinkProps) {
  const Comp = asChild ? Slot.Root : "a";

  return (
    <Comp
      className={cn(["transition-colors hover:text-foreground"], className)}
      data-slot="breadcrumb-link"
      {...props}
    />
  );
}

export function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
  return (
    <ol
      className={cn([
        "flex flex-wrap items-center gap-1.5 text-xs tracking-wide wrap-break-word text-muted-foreground uppercase",
        "sm:gap-2.5",
      ], className)}
      data-slot="breadcrumb-list"
      {...props}
    />
  );
}

export function BreadcrumbSeparator({ children, className, ...props }: BreadcrumbSeparatorProps) {
  return (
    <li
      aria-hidden="true"
      className={cn(["[&>svg]:size-3.5"], className)}
      data-slot="breadcrumb-separator"
      role="presentation"
      {...props}
    >
      {children ?? (
        <ChevronRightIcon />
      )}
    </li>
  );
}

export function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps) {
  return (
    <span
      aria-current="page"
      aria-disabled="true"
      className={cn(["font-normal text-foreground"], className)}
      data-slot="breadcrumb-page"
      role="link"
      {...props}
    />
  );
}
