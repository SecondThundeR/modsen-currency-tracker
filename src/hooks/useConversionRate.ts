import { useCallback, useEffect, useMemo, useState } from "react";

import { getAllCurrentRates } from "@/features/coinapi/getAllCurrentRates";
import { RateArray } from "@/types/coinapi";

function useConversionRate(baseAssetID: string | null) {
  const [conversionInfo, setConversionInfo] = useState<RateArray | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const conversionOptions = useMemo(() => {
    return conversionInfo?.rates.map((rate) => rate.asset_id_quote);
  }, [conversionInfo?.rates]);

  const getRatesData = useCallback(async (baseAsset: string) => {
    setIsLoading(true);
    setIsError(false);

    const res = await getAllCurrentRates(baseAsset, {
      isInverted: false,
    });
    if (res === undefined) {
      setIsError(true);
      setIsLoading(false);
      return;
    }

    setConversionInfo(res);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!baseAssetID) return;
    getRatesData(baseAssetID).catch(console.error);
  }, [baseAssetID, getRatesData]);

  return { conversionInfo, conversionOptions, isLoading, isError };
}

export default useConversionRate;
