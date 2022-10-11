import { createSlice } from "@reduxjs/toolkit";
import { store } from "../../type";


export const privateSlice = createSlice({
  name: 'privateSlice',
  initialState: {
    isLogin: false,
  },
  reducers: {
    setLogin: (state:store.MprivateSlice) => {
      state.isLogin = true;
    },
    setLogout: (state:store.MprivateSlice) => {
      state.isLogin = false;
    }
  }

});

export const { setLogin,setLogout }  = privateSlice.actions;

export default privateSlice.reducer;