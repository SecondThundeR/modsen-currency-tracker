import { PropsWithChildren } from "react";
import { LinkProps } from "react-router-dom";

export interface LinkButtonProps
  extends PropsWithChildren,
    Pick<LinkProps, "to"> {}
