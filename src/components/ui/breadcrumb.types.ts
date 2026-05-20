import type { ComponentProps } from "react";

export type BreadcrumbProps = ComponentProps<"nav">;
export type BreadcrumbEllipsisProps = ComponentProps<"span">;
export type BreadcrumbItemProps = ComponentProps<"li">;
export type BreadcrumbLinkProps = ComponentProps<"a"> & { asChild?: boolean };
export type BreadcrumbListProps = ComponentProps<"ol">;
export type BreadcrumbSeparatorProps = ComponentProps<"li">;
export type BreadcrumbPageProps = ComponentProps<"span">;
