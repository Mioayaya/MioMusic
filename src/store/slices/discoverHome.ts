import { createSlice } from "@reduxjs/toolkit";
import { resType, storeType } from "../../type";

export const discoverHomeSlice = createSlice({
  name: 'discoverHomeSlice',
  initialState: {
    songs: []
  },
  reducers: {
    setSongData: (state:storeType.MdiscoveerHomeSlice,{payload}:{payload:resType.songs.MrmdSong[]}) => {
      state.songs = payload;
    }
  }

});

export const { setSongData }  = discoverHomeSlice.actions;

export default discoverHomeSlice.reducer;