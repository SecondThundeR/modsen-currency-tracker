import { PropsWithChildren } from "react";

export interface AlertProps extends PropsWithChildren {
  type: "success" | "error";
}
