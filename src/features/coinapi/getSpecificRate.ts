import axios from "axios";

import { COIN_API_EXCHANGE_RATE_URL } from "@/constants/endpoints";
import { RateObject } from "@/types/coinapi";

export async function getSpecificRate(base_asset: string, quote_asset: string) {
  try {
    const response = await axios.get<RateObject>(
      `${COIN_API_EXCHANGE_RATE_URL}${base_asset}/${quote_asset}`,
      {
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
