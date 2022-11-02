import { resType } from "..";

export interface McontainRight {
  scrollTop: number;
  clientHeight: number;
}

/******************* */
export interface MthemeSlice {
  theme: string;
}

export interface MprivateSlice {
  isLogin: boolean;
}

export interface McontrolSlice {
  leftNavKey: string;
  containRight: McontainRight;
}

export interface MdiscoveerHomeSlice {
  songs: resType.songs.MrmdSong[];
}

/********** */
export interface state {
  themeSlice: MthemeSlice;
  privateSlice: MprivateSlice;
  controlSlice: McontrolSlice;
  discoverSlice: MdiscoveerHomeSlice;
}