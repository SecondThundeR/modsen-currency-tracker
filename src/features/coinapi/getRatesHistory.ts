import axios from "axios";

import { COIN_API_EXCHANGE_RATE_URL } from "@/constants/endpoints";
import { RateHistory } from "@/types/coinapi";

export async function getRatesHistory(
  base_asset: string,
  quote_asset: string,
  limit: number = 31,
) {
  try {
    const response = await axios.get<RateHistory[]>(
      `${COIN_API_EXCHANGE_RATE_URL}${base_asset}/${quote_asset}/history`,
      {
        params: {
          period_id: "1DAY",
          limit,
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
