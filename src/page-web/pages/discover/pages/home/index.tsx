import { Message } from '@arco-design/web-react';
import { FC, useEffect, useRef, useState } from 'react';

import { HELLOWORDS } from '../../../../../common/sayHello';
import { api } from '../../../../../server';
import { timesMethods } from '../../../../../utils';

import { utilsType } from '../../../../../type';
import { MioWebDiscoverHomeDiv } from './styles';
import useImageLazy from '../../../../../hooks/useImageLazy';

interface Props  {

}

const imgList = Array.from(
  { length: 30 },
  (item) =>
    (item = `https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg`),
);

const MioWebDiscoverHome : FC<Props> = (props) => {
  const [ timeType,setTimeType ] = useState<utilsType.MtimeType>();
  const domRef = useRef([]) as any;  
  useImageLazy(domRef.current,30);

  useEffect(() => {
    const ptime = timesMethods.getTimeType();
    setTimeType(ptime);
    test();
  },[])

  const test = async() => {
    try {
      // const { data,response } = await getSonglistDetail(92);
      const { data,response } = await api.getSonglistDetail(948471242);
      data || Message.error(response.status+response.statusText);
      response || console.log(data);      
    } catch(e:any) {
      Message.error(JSON.stringify(e));
    }
  }

  return (
    <MioWebDiscoverHomeDiv>
      <div className="h2">{ timeType&&HELLOWORDS[timeType]}</div>

      {/* 测试 loadImage */}
      <>
        {imgList.map((item, index) => (
          <img
            ref={(el) => (domRef.current[index] = el)}
            key={`lazy-${index}`}
            data-src={item}
            style={{
              display: 'block',
              width: '30px',
              height: '30px',
              marginTop: '50px',
            }}
          />
        ))}
      </>

    </MioWebDiscoverHomeDiv>
  )
}

// 子组件缩写为 MioWebDHXxx;
export default MioWebDiscoverHome
