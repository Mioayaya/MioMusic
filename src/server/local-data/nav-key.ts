import { MnavKey } from "../../type/interface/navKey";

export const leftTopNavKey:MnavKey[] = [
  {
    name: '发现音乐',
    value: 'discover',
    key: '0',
    path: '/discover/home'
  },
  {
    name: '动态',
    value: 'dynamic',
    key: '1',
    path: '/dynamic'
  },
  {
    name: '电台',
    value: 'radioStation',
    key: '2',
    path: '/radiostation'
  },
  {
    name: 'MV',
    value: 'MV',
    key: '3',
    path: '/MV'
  },
  {
    name: 'FM',
    value: 'FM',
    key: '4',
    path: '/FM'
  }
]

export const discoverNavKey:MnavKey[] = [
  {
    name: '每日推荐',
    value: 'home',
    key: '0-0',
    path: '/discover/home'
  },
  {
    name: 'ACG',
    value: 'acg',
    key: '0-1',
    path: '/discover/acg'
  },
  {
    name: '排行榜',
    value: 'rank',
    key: '0-2',
    path: '/discover/rank'
  },
  {
    name: '歌单广场',
    value: 'singinglistSquare',
    key: '0-3',
    path: '/discover/singinglistsquare'
  },
  {
    name: '歌手',
    value: 'singerSquare',
    key: '0-4',
    path: '/discover/singersquare'
  }
]

export const leftBottomNavKey:MnavKey[] = [
  {
    name: '我的喜欢',
    value: 'likeplay',
    key: '5',
    path: 'likeplay'
  },
  {
    name: '最近播放',
    value: 'recentPlays',
    key: '6',
    path: 'recentplays'
  },
  {
    name: '我的收藏',
    value: 'collection',
    key: '7',
    path: 'collection'
  },
  {
    name: '我的消息',
    value: 'message',
    key: '8',
    path: 'message'
  }
]

