import { SelectHTMLAttributes } from "react";

import { CurrencyType } from "@/types/currency";

export interface CurrencySelectInputProps
  extends Pick<SelectHTMLAttributes<HTMLSelectElement>, "value" | "onChange"> {
  options: Pick<CurrencyType, "id" | "name">[];
  optionsHeaderText: string;
}
