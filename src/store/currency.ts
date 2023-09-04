import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RateArray } from "@/types/coinapi";

export interface CurrencyState {
  currentRates: RateArray | null;
  isFetching: boolean;
  isError: boolean;
  lastUpdatedAt: string | null;
}

const initialState: CurrencyState = {
  currentRates: null,
  isFetching: false,
  isError: false,
  lastUpdatedAt: null,
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    updateRates: (state, action: PayloadAction<RateArray>) => {
      state.currentRates = action.payload;
      state.lastUpdatedAt = new Date().toLocaleTimeString();
      state.isFetching = false;
      state.isError = false;
    },
    fetchingRates: (state) => {
      state.isFetching = true;
    },
    ratesFetchError: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
  },
});

export const { updateRates, fetchingRates, ratesFetchError } =
  currencySlice.actions;

export default currencySlice.reducer;
