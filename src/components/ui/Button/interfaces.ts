import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export interface ButtonProps
  extends PropsWithChildren,
    Pick<
      ButtonHTMLAttributes<HTMLButtonElement>,
      "className" | "onClick" | "type" | "disabled"
    > {}
