import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FILTER_RATES } from "@/constants/filterRates";
import { getAllCurrentRates } from "@/features/coinapi/getAllCurrentRates";
import { RootState } from "@/store";
import { fetchingRates, ratesFetchError, updateRates } from "@/store/currency";

function useRates(base_asset: string) {
  const rates = useSelector((state: RootState) => state.currency);
  const dispatch = useDispatch();

  const isDataExists = rates.currentRates !== null;

  const fetchRates = useCallback(async () => {
    dispatch(fetchingRates());
    const res = await getAllCurrentRates(base_asset, {
      filterRates: FILTER_RATES,
    });
    if (!res) return dispatch(ratesFetchError());
    dispatch(updateRates(res));
  }, [base_asset, dispatch]);

  useEffect(() => {
    if (isDataExists) return;
    fetchRates().catch(console.error);
  }, [fetchRates, isDataExists]);

  return rates;
}

export default useRates;
