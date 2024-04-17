import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
const Body = document.querySelector("body");
export enum themeApp {
  DARK = "dark",
  LIGHT = "light",
}

export type typeThemeAppSlice = {
  theme: themeApp;
};

const initialState: typeThemeAppSlice = {
  theme: themeApp.LIGHT,
};

export const themeAppSlice = createSlice({
  name: "themeApp",
  initialState,
  reducers: {
    topicUpdate: (state) => {
      if (state.theme === themeApp.LIGHT) {
        Body?.classList.remove(themeApp.LIGHT);
        Body?.classList.toggle(themeApp.DARK);
      } else {
        Body?.classList.remove(themeApp.DARK);
        Body?.classList.toggle(themeApp.LIGHT);
      }

      state.theme = state.theme === themeApp.LIGHT ? themeApp.DARK : themeApp.LIGHT;
    },
    darkTheme: (state) => {
      state.theme = themeApp.DARK;
      Body?.classList.add(themeApp.DARK);
    },
  },
});
export const selectTheme = (state: RootState) => state.themeApp.theme;
// Action creators are generated for each case reducer function
export const { topicUpdate, darkTheme } = themeAppSlice.actions;

export default themeAppSlice.reducer;
