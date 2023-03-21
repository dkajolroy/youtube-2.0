import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: () => {},
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
