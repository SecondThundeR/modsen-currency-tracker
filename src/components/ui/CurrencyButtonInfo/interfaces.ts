import { CurrencyType } from "@/types/currency";

export interface CurrencyButtonInfoProps
  extends Omit<CurrencyType, "id" | "iconSrc"> {}
