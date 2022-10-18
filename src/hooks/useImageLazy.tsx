import { useState, useRef, useEffect } from 'react';
import useThrottle from './useThrottle';
import { storeType } from '../type';
import { useSelector } from 'react-redux';

const useImageLazy = (
  domList: HTMLImageElement[],
  imgHeight?: number
  ) => {  
  const ContainRight:storeType.McontainRight
    = useSelector<storeType.state,storeType.McontainRight>(state => state.controlSlice.containRight);
  const [ scrollCount,setScrollCount ] = useState<number>(0);  
  const ImgHeight = imgHeight || 50;
  const PaddingHeight = 150; // header+padding
  
  const getTop = () => {
    let length = domList.length;        
    const clientHeight = 
      ContainRight.clientHeight || document.documentElement.clientHeight-300;
    
    for(let i=0;i<length;i++) {
      // 元素距离页面顶部的距离
      let { top } = domList[i].getBoundingClientRect();
      // 当图片到顶部的距离大于可视区域和滚动区域之和的时候,将data-src赋值给src      
      
      if(top < ContainRight.scrollTop+clientHeight+ImgHeight+PaddingHeight) {
        if(!domList[i].src) {
          domList[i].src = domList[i].dataset.src as string;
        }
      }
    }
  }

  useEffect(() => {
    setScrollCount(scrollCount+1);    
  },[ContainRight.clientHeight,ContainRight.scrollTop])

  useThrottle(
      () => {
        getTop();
      },
      500,
      [scrollCount],
  );
}

export default useImageLazy