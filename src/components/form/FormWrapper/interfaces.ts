import { FormHTMLAttributes, PropsWithChildren } from "react";

export interface FormWrapperProps
  extends PropsWithChildren,
    Pick<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {}
