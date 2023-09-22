import { InputHTMLAttributes } from "react";

export interface InputProps
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    | "value"
    | "onChange"
    | "onFocus"
    | "max"
    | "type"
    | "placeholder"
    | "required"
    | "name"
    | "id"
  > {
  label?: string;
}
