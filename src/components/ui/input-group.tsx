import { Button } from "./button";
import { Input } from "./input";
import type {
  InputGroupAddonProps, InputGroupButtonProps, InputGroupInputProps, InputGroupProps, InputGroupTextareaProps,
  InputGroupTextProps,
} from "./input-group.types";
import { inputGroupAddonVariants, inputGroupButtonVariants } from "./input-group.variants";
import { Textarea } from "./textarea";
import { cn } from "@/lib/utils";

export function InputGroup({ className, ...props }: InputGroupProps) {
  return (
    <div
      className={cn([
        "group/input-group relative flex h-10 w-full min-w-0 items-center rounded-none border border-transparent",
        "border-b-input bg-transparent transition-[color,border-color] outline-none",
        "in-data-[slot=combobox-content]:focus-within:border-inherit",
        "in-data-[slot=combobox-content]:focus-within:ring-0 has-data-[align=block-end]:rounded-none",
        "has-data-[align=block-start]:rounded-none has-[[data-slot=input-group-control]:focus-visible]:border-b-ring",
        "has-[[data-slot][aria-invalid=true]]:border-b-destructive has-[textarea]:rounded-none",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto",
        "dark:has-[[data-slot][aria-invalid=true]]:border-b-destructive/50",
        "has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3",
      ], className)}
      data-slot="input-group"
      role="group"
      {...props}
    />
  );
}

export function InputGroupAddon({ align = "inline-start", className, ...props }: InputGroupAddonProps) {
  return (
    <div
      className={cn(inputGroupAddonVariants({ align }), className)}
      data-align={align}
      data-slot="input-group-addon"
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return;
        }

        e.currentTarget.parentElement?.querySelector("input")?.focus();
      }}
      role="group"
      {...props}
    />
  );
}

export function InputGroupButton({
  className,
  size = "xs",
  type = "button",
  variant = "ghost",
  ...props
}: InputGroupButtonProps) {
  return (
    <Button
      className={cn(inputGroupButtonVariants({ size }), className)}
      data-size={size}
      type={type}
      variant={variant}
      {...props}
    />
  );
}

export function InputGroupInput({ className, ...props }: InputGroupInputProps) {
  return (
    <Input
      className={cn([
        "flex-1 border-0 bg-transparent ring-0 group-has-[>[data-align=inline-end]]/input-group:pr-2",
        "group-has-[>[data-align=inline-start]]/input-group:pl-2 focus-visible:ring-0 aria-invalid:ring-0",
        "dark:bg-transparent",
      ], className)}
      data-slot="input-group-control"
      {...props}
    />
  );
}

export function InputGroupText({ className, ...props }: InputGroupTextProps) {
  return (
    <span
      className={cn([
        "flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none",
        "[&_svg:not([class*='size-'])]:size-3.5",
      ], className)}
      {...props}
    />
  );
}

export function InputGroupTextarea({ className, ...props }: InputGroupTextareaProps) {
  return (
    <Textarea
      className={cn([
        "flex-1 resize-none border-0 bg-transparent py-2.5 ring-0 focus-visible:ring-0 aria-invalid:ring-0",
        "dark:bg-transparent",
      ], className)}
      data-slot="input-group-control"
      {...props}
    />
  );
}
