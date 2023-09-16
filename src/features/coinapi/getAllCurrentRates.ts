import axios from "axios";

import { COIN_API_EXCHANGE_RATE_URL } from "@/constants/endpoints";
import { RateArray } from "@/types/coinapi";

export async function getAllCurrentRates(
  base_asset: string,
  options?: {
    filterRates?: string[];
    isInverted?: boolean;
  },
) {
  try {
    const { filterRates, isInverted } = options ?? {};
    const filteredAssets =
      filterRates !== undefined ? filterRates.join(";") : undefined;
    const response = await axios.get<RateArray>(
      `${COIN_API_EXCHANGE_RATE_URL}${base_asset}`,
      {
        params: {
          filter_asset_id: filteredAssets,
          invert: isInverted ?? true,
        },
        headers: {
          "X-CoinAPI-Key": process.env.COINAPI_KEY,
        },
      },
    );
    return response.data;
  } catch (error: unknown) {
    console.error(error);
  }
}
