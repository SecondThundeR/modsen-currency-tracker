import { ThemeState } from "@/store/theme";
import { RateHistory } from "@/types/coinapi";

export interface TimelineChartGraphProps extends ThemeState {
  data: RateHistory[];
  limit: number;
}
