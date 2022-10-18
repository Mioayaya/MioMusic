import { FC, useEffect, useRef } from 'react';

interface Iprops {
  fn: Function;
  wait: number;
  deps: any;
}

const useThrottle = (fn:Function,wait:number,deps:any) => {  
  const prev = useRef(0);
  
  useEffect(() => {
    const curr = Date.now();
    if (curr - prev.current > wait) {
      fn();
      prev.current = curr;
    }
  },deps)

}

export default useThrottle