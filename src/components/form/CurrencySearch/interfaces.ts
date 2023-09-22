import { SelectedCurrency } from "@/components/BankMap/interfaces";

export interface CurrencySearchProps {
  setSelectedCurrency: (currency: SelectedCurrency) => void;
}

export interface CurrencySearchState {
  value: string;
  isFocused: boolean;
}
