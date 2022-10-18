// 歌单相关
import { axiosType } from "../../../type";
import request from "../axios";

// 获取歌单详细信息，每首歌的信息等
export function getSonglistDetail(id:number):Promise<any> {
  return request({
    url: "/playlist/detail",
    params: {
      id,
    },
  })
}

