import React from "react";

import {
  PIN_DEFAULT_HEIGHT,
  PIN_ICON,
  PIN_STYLE,
} from "@/constants/mapPinOptions";

interface PinProps {
  size?: number;
}

class Pin extends React.Component<PinProps> {
  render() {
    const { size } = this.props;
    return (
      <svg
        height={size ?? PIN_DEFAULT_HEIGHT}
        viewBox="0 0 24 24"
        style={PIN_STYLE}
      >
        <path d={PIN_ICON} />
      </svg>
    );
  }
}

export default Pin;
