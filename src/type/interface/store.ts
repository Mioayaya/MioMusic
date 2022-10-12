export interface MthemeSlice {
  theme: string;
}

export interface MprivateSlice {
  isLogin: boolean;
}

export interface McontrolSlice {
  leftNavKey: string;
}

export interface state {
  themeSlice: MthemeSlice;
  privateSlice: MprivateSlice;
  controlSlice: McontrolSlice;
}