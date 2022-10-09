import { createSlice } from "@reduxjs/toolkit";

interface MSlice {
  theme: string
}

export const themeSlice = createSlice({
  name: 'themeSlice',
  initialState: {
    theme: 'dark',
  },
  reducers: {
    setTheme: (state:MSlice,{payload}:{payload:string}) => {
      state.theme = payload;
    }
  }

});

export const { setTheme }  = themeSlice.actions;

export default themeSlice.reducer;