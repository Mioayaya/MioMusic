import { createSlice } from "@reduxjs/toolkit";
import { storeType } from "../../type";

export const themeSlice = createSlice({
  name: 'themeSlice',
  initialState: {
    theme: 'dark',
  },
  reducers: {
    setTheme: (state:storeType.MthemeSlice,{payload}:{payload:string}) => {
      state.theme = payload;
    }
  }

});

export const { setTheme }  = themeSlice.actions;

export default themeSlice.reducer;