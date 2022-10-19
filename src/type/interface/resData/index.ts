export interface Mresponse {
  status: number;
  statusText: string;
}

export interface MresData {
  category?: number;
  code?: number;
  result: unknown;
}

// promise缩写为P，recommend缩写为 rmd
export interface Mpromise {
  data?: MresData;
  response?: Mresponse;
}
