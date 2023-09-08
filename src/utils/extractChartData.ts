import { RateHistory } from "@/types/coinapi";

export function extractChartData(data: RateHistory[], limit?: number) {
  return data
    .map((item) => {
      const { time_period_start, rate_open, rate_high, rate_low, rate_close } =
        item;
      return {
        x: new Date(time_period_start),
        y: [
          rate_open.toFixed(2),
          rate_high.toFixed(2),
          rate_low.toFixed(2),
          rate_close.toFixed(2),
        ],
      };
    })
    .slice(0, limit)
    .reverse();
}
