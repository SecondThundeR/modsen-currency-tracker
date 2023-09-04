import { CURRENCY_OPTIONS } from "@/constants/currencyOptions";
import { CurrencyState } from "@/store/currency";
import { CurrencyType } from "@/types/currency";

export function mergeOptionsWithRates(
  ratesData: CurrencyState["currentRates"],
) {
  return CURRENCY_OPTIONS.map((option) => {
    const rateData = ratesData?.rates.find(
      (rate) => rate.asset_id_quote === option.id,
    );
    if (!rateData) return option;

    const { rate } = rateData;

    return {
      ...option,
      rate,
      rate_base: ratesData?.asset_id_base,
    } as CurrencyType;
  });
}
