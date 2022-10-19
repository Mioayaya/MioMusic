import { useEffect, useRef } from 'react';

const useThrottle = (fn:Function,wait:number,deps:any[]) => {  
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