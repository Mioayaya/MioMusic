/**
 * @interface songs相关接口
 */

export interface Msong {

}

// 推荐歌曲
export interface MrmdSong {
  id: number;
  picUrl: string;
  [keys:string]: any;
  song:{
    [keys:string]: any;
  }
}

