import { CURRENCY_OPTIONS } from "@/constants/currencyOptions";

export function filterCurrencyOptions(value: string) {
  const lowercaseValue = value.toLocaleLowerCase();
  return CURRENCY_OPTIONS.filter(
    (item) =>
      item.id.toLocaleLowerCase().includes(lowercaseValue) ||
      item.name.toLocaleLowerCase().includes(lowercaseValue),
  );
}
