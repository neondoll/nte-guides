import type { ComponentProps, FC } from "react";

import { cn } from "@/lib/utils";

type ImageProps = ComponentProps<"img">;

export const ArcImage: FC<ImageProps> = ({ alt, className, src, ...props }) => {
  return (
    <img
      alt={alt}
      className={cn("aspect-square max-w-50 max-h-50", className)}
      src={src ?? "images/currently-unavailable.png"}
      {...props}
    />
  );
};
export const ArcTypeImage: FC<ImageProps> = ({ alt, className, ...props }) => {
  return <img alt={alt} className={cn("aspect-square max-w-50 max-h-50", className)} {...props} />;
};
export const CartridgeImage: FC<ImageProps> = ({ alt, className, ...props }) => {
  return <img alt={alt} className={cn("aspect-square max-w-22 max-h-22", className)} {...props} />;
};
export const CharacterImage: FC<ImageProps> = ({ alt, className, ...props }) => {
  return <img alt={alt} className={cn("aspect-square max-w-50 max-h-50", className)} {...props} />;
};
export const CharacterRoleImage: FC<ImageProps> = ({ alt, className, ...props }) => {
  return <img alt={alt} className={cn("aspect-square max-w-50 max-h-50", className)} {...props} />;
};
export const ElementImage: FC<ImageProps> = ({ alt, className, ...props }) => {
  return <img alt={alt} className={cn("aspect-square max-w-50 max-h-50", className)} {...props} />;
};
export const ModuleImage: FC<ImageProps> = ({ alt, className, ...props }) => {
  return <img alt={alt} className={cn("aspect-square max-w-37.25 max-h-37.25", className)} {...props} />;
};
export const RankImage: FC<ImageProps> = ({ alt, className, ...props }) => {
  return <img alt={alt} className={cn("aspect-square max-w-50 max-h-50", className)} {...props} />;
};
