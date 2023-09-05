import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FILTER_RATES } from "@/constants/filterRates";
import { getAllCurrentRates } from "@/features/coinapi/getAllCurrentRates";
import { RootState } from "@/store";
import { fetchingRates, ratesFetchError, updateRates } from "@/store/currency";

function useRates(base_asset: string) {
  const rates = useSelector((state: RootState) => state.currency);
  const dispatch = useDispatch();
  const isDataExists = rates.currentRates !== null;

  useEffect(() => {
    if (isDataExists) return;
    dispatch(fetchingRates());
    getAllCurrentRates(base_asset, { filterRates: FILTER_RATES })
      .then((res) => {
        if (!res) {
          dispatch(ratesFetchError());
        } else dispatch(updateRates(res));
      })
      .catch(console.error);
  }, [base_asset, dispatch, isDataExists]);

  return rates;
}

export default useRates;
