import React, { ImgHTMLAttributes, memo } from "react";

import { getIconDescription } from "@/utils/getIconDescription";

interface IconProps
  extends Pick<
    ImgHTMLAttributes<HTMLImageElement>,
    "width" | "height" | "src" | "alt" | "title"
  > {}

const Icon = memo(function Icon(props: IconProps) {
  const { title, alt, ...otherProps } = props;
  const titleText = getIconDescription(title);
  const altText = getIconDescription(alt);

  return <img title={titleText} alt={altText} {...otherProps} />;
});

export default Icon;
