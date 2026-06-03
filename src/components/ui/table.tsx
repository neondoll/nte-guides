"use client";

import type {
  TableBodyProps, TableCaptionProps, TableCellProps, TableFooterProps, TableHeaderProps, TableHeadProps, TableProps,
  TableRowProps,
} from "./table.types";
import { cn } from "@/lib/utils";

export function Table({ className, containerClassName, ...props }: TableProps) {
  return (
    <div
      className={cn(["relative w-full overflow-x-auto"], containerClassName)}
      data-slot="table-container"
    >
      <table
        className={cn(["w-full caption-bottom text-sm"], className)}
        data-slot="table"
        {...props}
      />
    </div>
  );
}

export function TableBody({ className, ...props }: TableBodyProps) {
  return (
    <tbody
      className={cn(["[&_tr:last-child]:border-0"], className)}
      data-slot="table-body"
      {...props}
    />
  );
}

export function TableCaption({ className, ...props }: TableCaptionProps) {
  return (
    <caption
      className={cn(["mt-4 text-sm text-muted-foreground"], className)}
      data-slot="table-caption"
      {...props}
    />
  );
}

export function TableCell({ className, ...props }: TableCellProps) {
  return (
    <td
      className={cn(["p-3 align-middle whitespace-nowrap has-[[role=checkbox]]:pr-0"], className)}
      data-slot="table-cell"
      {...props}
    />
  );
}

export function TableFooter({ className, ...props }: TableFooterProps) {
  return (
    <tfoot
      className={cn(["border-t bg-muted/50 font-medium [&>tr]:last:border-b-0"], className)}
      data-slot="table-footer"
      {...props}
    />
  );
}

export function TableHead({ className, ...props }: TableHeadProps) {
  return (
    <th
      className={cn([
        "h-12 px-3 text-left align-middle text-xs font-medium tracking-wider whitespace-nowrap text-muted-foreground",
        "uppercase has-[[role=checkbox]]:pr-0",
      ], className)}
      data-slot="table-head"
      {...props}
    />
  );
}

export function TableHeader({ className, ...props }: TableHeaderProps) {
  return (
    <thead
      className={cn(["[&_tr]:border-b"], className)}
      data-slot="table-header"
      {...props}
    />
  );
}

export function TableRow({ className, ...props }: TableRowProps) {
  return (
    <tr
      className={cn([
        "border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted",
      ], className)}
      data-slot="table-row"
      {...props}
    />
  );
}
