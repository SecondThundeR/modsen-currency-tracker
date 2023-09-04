import axios from "axios";

import { COIN_API_EXCHANGE_RATE_URL } from "@/constants/endpoints";
import { RateArray } from "@/types/coinapi";

export async function getAllCurrentRates(
  base_asset: string,
  filter_rates?: string[],
) {
  try {
    const filtered_assets =
      filter_rates !== undefined ? filter_rates.join(";") : undefined;
    const response = await axios.get<RateArray>(
      `${COIN_API_EXCHANGE_RATE_URL}${base_asset}`,
      {
        params: {
          filter_asset_id: filtered_assets,
        },
        headers: {
          "X-CoinAPI-Key": process.env.COINAPI_KEY,
        },
      },
    );
    return response.data;
  } catch (error: unknown) {
    console.error(error);
    return;
  }
}
