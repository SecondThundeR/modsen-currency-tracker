import { CURRENCY_OPTIONS } from "@/constants/currencyOptions";

export interface CurrencySearchDropdownItemProps
  extends Omit<(typeof CURRENCY_OPTIONS)[number], "iconSrc"> {
  setSelectedCurrency: (currency: string) => void;
}
