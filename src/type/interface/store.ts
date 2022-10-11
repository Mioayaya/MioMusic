export interface MthemeSlice {
  theme: string;
}

export interface MprivateSlice {
  isLogin: boolean;
}

export interface state {
  themeSlice: MthemeSlice;
  privateSlice: MprivateSlice;
}