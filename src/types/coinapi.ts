export interface RateObject {
  time: string;
  asset_id_base: string;
  asset_id_quote: string;
  rate: number;
}

export interface RateArray extends Pick<RateObject, "asset_id_base"> {
  rates: Omit<RateObject, "asset_id_base">[];
}
