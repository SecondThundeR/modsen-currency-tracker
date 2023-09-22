import React, { memo } from "react";

import { getIconDescription } from "@/utils/getIconDescription";

import { IconProps } from "./interfaces";

const Icon = memo(function Icon(props: IconProps) {
  const { title, alt, ...otherProps } = props;
  const titleText = getIconDescription(title);
  const altText = getIconDescription(alt);

  return <img title={titleText} alt={altText} {...otherProps} />;
});

export default Icon;
