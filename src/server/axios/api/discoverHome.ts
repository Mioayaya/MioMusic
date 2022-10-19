/**
 * @function 每日推荐的api集合
 */

import request from "../axios"
import { getRecommendNewSong } from "./song"

/**
 * 单曲
 */
// 获取每日推荐歌曲(登录)
export const getRecommendSongs = ():Promise<unknown> => {
  return request({
    url: '/recommend/songs',
  })
}
// 不登录，使用推荐新音乐接口
export const getRecommendSongsUnSign = (limit?:number):Promise<unknown> => {
  return getRecommendNewSong(limit||10);
}

// 歌单

// 歌手

// mv

export {}
