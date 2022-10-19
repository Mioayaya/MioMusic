/**
 * @function 歌曲相关api
 */

import request from "../axios"

// 推荐新音乐(不需要登录) // 默认10
export const getRecommendNewSong = (limit?:number):Promise<unknown> => {
  return request({
    url: '/personalized/newsong',
    params: {
      limit: limit || 10,
    }
  })
}
