import { Message } from '@arco-design/web-react';
import { FC, useEffect, useRef, useState } from 'react';

import api from '../../../../../server';
import { timesMethods } from '../../../../../utils';

import { resType, songsType, storeType, utilsType } from '../../../../../type';
import { MioWebDiscoverHomeDiv } from './styles';
import useImageLazy from '../../../../../hooks/useImageLazy';
import { useSelector } from 'react-redux';
import MioWebDhHello from './components/home-hello';
import MioWebDhRmdSongs from './components/recommend-songs';

const imgList = Array.from(
  { length: 30 },
  (item) =>
    (item = `https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg`),
);

const MioWebDiscoverHome : FC = () => {
  const IsLogin:boolean = useSelector<storeType.state,boolean>(state => state.privateSlice.isLogin);
  const THEME:string = useSelector<storeType.state,string>(state => state.themeSlice.theme);
  const [ isloading, setIsLoading ] = useState<boolean>(true);
  // const domRef = useRef([]) as any;
  // useImageLazy(domRef.current,30);

  useEffect(() => {    
  },[])

  const test = async() => {
    try {
      // const { data,response } = await getSonglistDetail(92);
      const { data,response } = await api.discoverHome.getRecommendSongsUnSign() as resType.Mpromise;
      data || Message.error(response?.status+response!.statusText);
      response || console.log(data?.result);
    } catch(e:any) {
      Message.error(JSON.stringify(e));
    }
  }

  return (
    <MioWebDiscoverHomeDiv>      
      <MioWebDhHello theme={THEME} isLogin={IsLogin}/>
      <MioWebDhRmdSongs theme={THEME} isLogin={IsLogin}/>
      <h2>推荐songlist</h2>
      <h2>recommend-singer</h2>
      <h2>recommend-mv</h2>
      {/* 测试 loadImage */}
      {/* <>
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
      </> */}
    </MioWebDiscoverHomeDiv>
  )
}

// 子组件缩写为 MioWebDhXxx;
export default MioWebDiscoverHome
