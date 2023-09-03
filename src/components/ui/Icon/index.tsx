import React, { memo } from "react";

interface IconProps {
  width: number;
  height: number;
  iconSrc: string;
}

const Icon = memo(function Icon({ width, height, iconSrc }: IconProps) {
  return <img width={width} height={height} src={iconSrc} />;
});

export default Icon;
