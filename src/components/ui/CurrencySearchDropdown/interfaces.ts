import { SelectedCurrency } from "@/components/BankMap/interfaces";

export interface CurrencySearchDropdownProps {
  value: string;
  setSelectedCurrency: (currency: SelectedCurrency) => void;
}
