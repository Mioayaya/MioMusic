import { createSlice } from "@reduxjs/toolkit";
import { store } from "../../type";

export const themeSlice = createSlice({
  name: 'themeSlice',
  initialState: {
    theme: 'dark',
  },
  reducers: {
    setTheme: (state:store.MthemeSlice,{payload}:{payload:string}) => {
      state.theme = payload;
    }
  }

});

export const { setTheme }  = themeSlice.actions;

export default themeSlice.reducer;