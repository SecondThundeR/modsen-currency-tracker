import { RateHistory } from "@/types/coinapi";

export interface TimelineProps {}

export interface TimelineState {
  isToastOpen: boolean;
  selectedDays: number;
  selectedCurrencyId: string | undefined;
  currentHistoryRate: RateHistory[] | undefined;
}
