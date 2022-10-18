import { createSlice } from "@reduxjs/toolkit";
import { storeType } from "../../type";

export const controlSlice = createSlice({
  name: 'controlSlice',
  initialState: {
    leftNavKey: '0',
    containRight: {
      scrollTop: 0,
      clientHeight: 0,
    }
  },
  reducers: {
    setLeftNavKey: (state:storeType.McontrolSlice,{payload}:{payload:string}) => {
      state.leftNavKey = payload;      
    },
    setLeftNavKeyAway: (state:storeType.McontrolSlice) => {
      state.leftNavKey = '999-999';
    },
    setContainRight: (state:storeType.McontrolSlice,{payload}:{payload:storeType.McontainRight}) => {
      state.containRight.scrollTop = payload.scrollTop;
      state.containRight.clientHeight = payload.clientHeight;
    }
  }

});

export const { setLeftNavKey,setLeftNavKeyAway,setContainRight }  = controlSlice.actions;

export default controlSlice.reducer;