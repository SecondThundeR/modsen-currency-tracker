import { CurrencyType } from "@/types/currency";

export interface TimelineCurrencyInfoProps
  extends Pick<CurrencyType, "id" | "name" | "iconSrc"> {}
