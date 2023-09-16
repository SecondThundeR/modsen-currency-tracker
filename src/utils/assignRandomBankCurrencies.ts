import { FILTER_RATES } from "@/constants/filterRates";
import { EnhancedPlaceDetails, PlaceDetails } from "@/types/place";

import { filterRandomElements } from "./filterRandomElements";

export function assignRandomBankCurrencies(
  banksData: PlaceDetails,
  baseAsset: string,
) {
  const banksDataCopy = structuredClone(banksData) as EnhancedPlaceDetails;
  const currenciesOptions = FILTER_RATES.filter((rate) => rate !== baseAsset);

  for (let i = 0; i < banksDataCopy.features.length; i++) {
    banksDataCopy.features[i].availableCurrencies = [
      baseAsset,
      ...filterRandomElements(currenciesOptions),
    ];
  }

  return banksDataCopy;
}
