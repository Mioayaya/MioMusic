export interface Moption {
  url: string;
  params?: {
    limit?: number;
    offset?: number;
    [keys:string]:any
  }
}