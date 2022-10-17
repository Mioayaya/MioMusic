// 早上 中午 下午 晚上 夜晚 凌晨
export type MtimeType = 'morning'|'noon'|'afternoon'|'evening'|'night'|'beforeDawn';

export type MsayHello = {
  [keys in MtimeType]: string;
};