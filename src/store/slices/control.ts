import { createSlice } from "@reduxjs/toolkit";
import { store } from "../../type";

export const controlSlice = createSlice({
  name: 'controlSlice',
  initialState: {
    leftNavKey: '0',
  },
  reducers: {
    setLeftNavKey: (state:store.McontrolSlice,{payload}:{payload:string}) => {
      state.leftNavKey = payload;
    },
    setLeftNavKeyAway: (state:store.McontrolSlice) => {
      state.leftNavKey = '999-999';
    }
  }

});

export const { setLeftNavKey,setLeftNavKeyAway }  = controlSlice.actions;

export default controlSlice.reducer;