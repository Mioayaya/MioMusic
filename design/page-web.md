# pc端页面设计

# total 
- 背景
- wrap 嵌套
- 整个右侧菜单栏
- 头部搜索框等
- 左侧导航栏
- 底部播放条

# 功能
- 登录
- 搜索
- 播放
- 更改播放顺序
- 查看歌单
- 显示/收藏到喜欢
- mv
- 歌手详情
- 动态
- 电台
···

# Redux
- 应用中有很多 state 在多个组件中需要使用
- 应用 state 会随着时间的推移而频繁更新
- 更新 state 的逻辑很复杂
  ## privateSlice
  - 登录用户信息
  - sign: 是否登录
  - information: { name,avatar,id, ... }
  - songlist: { 创建的歌单，收藏的歌单，创建的电台，收藏的电台}  // 歌单 id list
  - likedslist: {} // 喜欢的音乐列表 歌单id&songlist
  - socialContack： { 关注、粉丝、动态 }
  ## userSlice
  - 其他用户信息
  - information
  - songlist
  - socialContack

  ## playSlice
  - 播放列表状态
  - playing 播放状态
  - playlist 播放列表
  - currentTime 当前时间
  - 当前歌词

  ## songlist 歌单
  - 歌曲列表
  - 歌单信息
  
  ## 歌手、mv、动态信息

# home页面


