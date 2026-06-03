import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { Button } from "./button";
import { inputGroupAddonVariants, inputGroupButtonVariants } from "./input-group.variants";

export type InputGroupProps = ComponentProps<"div">;
export type InputGroupAddonProps = ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>;
export type InputGroupButtonProps = Omit<ComponentProps<typeof Button>, "size">
  & VariantProps<typeof inputGroupButtonVariants>;
export type InputGroupInputProps = ComponentProps<"input">;
export type InputGroupTextProps = ComponentProps<"span">;
export type InputGroupTextareaProps = ComponentProps<"textarea">;
