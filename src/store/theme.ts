import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  currentTheme: "light" | "dark";
}

const initialState: ThemeState = {
  currentTheme: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === "dark" ? "light" : "dark";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
