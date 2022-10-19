export interface Mresponse {
  status: number;
  statusText: string;
}

export interface MresData {
  category?: number;
  code?: number;
  result: unknown;  // 取得结果后再断言
}

// promise缩写为P，recommend缩写为 rmd
export interface Mpromise {
  data?: MresData;
  response?: Mresponse;
}
