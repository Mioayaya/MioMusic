# MioMusic

--  --

# install 
```sh
npm install
```
or
```sh
yarn install
```

# run
```sh
npm run dev
```
or
```sh
yarn dev
```

# 问题记录

### Q1: 如何实现图片懒加载?
  - 尝试使用 lazyload 但是貌似不兼容 react18
  #### Q1-1 手写一个图片懒加载?
  - 自定义hooks
  - 参考掘金 https://juejin.cn/post/6863624907452841998
  - 但是效果并不理想，如果在容器里滚动就无法生效
  
  #### Q1-2 如何在容器里生效?
  - 获取容器的滚动事件,将滚动数据写入redux中，判断
  - 增加图片高度选项，优化代码，
  - 首屏加载则使用 document的高度
