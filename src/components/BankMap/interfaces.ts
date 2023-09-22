import { CURRENCY_OPTIONS } from "@/constants/currencyOptions";
import { EnhancedPlaceDetails, EnhancedPlaceFeature } from "@/types/place";

export interface SelectedCurrency
  extends Omit<(typeof CURRENCY_OPTIONS)[number], "iconSrc"> {}

export interface BankMapProps {}

export interface BankMapState {
  selectedCurrency: SelectedCurrency | undefined;
  banksData: EnhancedPlaceDetails | undefined;
  selectedBank: EnhancedPlaceFeature | null;
  isLoading: boolean;
  isError: boolean;
}
