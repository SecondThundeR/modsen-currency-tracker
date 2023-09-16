export interface RateObject {
  time: string;
  asset_id_base: string;
  asset_id_quote: string;
  rate: number;
}

export interface RateArray extends Pick<RateObject, "asset_id_base"> {
  rates: Omit<RateObject, "asset_id_base">[];
}

export interface RateHistory {
  time_period_start: string;
  time_period_end: string;
  time_open: string;
  time_close: string;
  rate_open: number;
  rate_high: number;
  rate_low: number;
  rate_close: number;
}
