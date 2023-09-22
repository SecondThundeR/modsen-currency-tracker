import { ImgHTMLAttributes } from "react";

export interface IconProps
  extends Pick<
    ImgHTMLAttributes<HTMLImageElement>,
    "width" | "height" | "src" | "alt" | "title"
  > {}
