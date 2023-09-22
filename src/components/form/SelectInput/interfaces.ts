import { SelectHTMLAttributes } from "react";

export interface SelectInputProps
  extends Pick<SelectHTMLAttributes<HTMLSelectElement>, "value" | "onChange"> {
  options: string[];
  optionsHeaderText: string;
}
