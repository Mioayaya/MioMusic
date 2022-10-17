import { createSlice } from "@reduxjs/toolkit";
import { storeType } from "../../type";


export const privateSlice = createSlice({
  name: 'privateSlice',
  initialState: {
    isLogin: false,
  },
  reducers: {
    setLogin: (state:storeType.MprivateSlice) => {
      state.isLogin = true;
    },
    setLogout: (state:storeType.MprivateSlice) => {
      state.isLogin = false;
    }
  }

});

export const { setLogin,setLogout }  = privateSlice.actions;

export default privateSlice.reducer;