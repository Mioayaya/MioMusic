import { FC, useEffect, useMemo, useState } from 'react';

import { MioWebDiv } from './styles'
import MioWebContent from './cmps/content';
import MioWebFooter from './cmps/footer';
import MioWebHeader from './cmps/header';
import MioWebPlayPage from './cmps/play-page';
import MioWebSideBar from './cmps/side-bar';

const MioWeb : FC = () => {
  const [ showMenu,setShowMenu ] = useState<boolean>(true);
  const [ showPlay,setShowPlay ] = useState<boolean>(false);
  // 第一个代表footer显示，第二个代表play
  const [ step,setStep ] = useState<Array<boolean>>([true,false]); 
  
  useEffect(() => {
    if(showPlay) {
      toShowPlay();
    }else {
      toUnShowPlay();
    }
  },[showPlay])

  // methods
  const setpPromise = new Promise((reslove,reject) => {    
    setTimeout(reslove,1000,'done');    
  });

  // footer false then play true
  const toShowPlay = async () => {
    setStep([false,false]);
    const res = await setpPromise;
    setStep([false,true]);
  }

  // play false then footer true
  const toUnShowPlay = async () => {
    setStep([false,false]);
    const res = await setpPromise;
    setStep([true,false]);
  }
  
  return (
    <MioWebDiv>
      <div className="wrap">
        <MioWebHeader setShowMenu={setShowMenu} showMenu={showMenu}/>
        <MioWebContent showMenu={showMenu} showPlay={showPlay} setShowPlay={setShowPlay}/>
        <MioWebFooter setShowPlay={setShowPlay} showPlay={step[0]}/>
        <MioWebPlayPage setShowPlay={setShowPlay} showPlay={step[1]}/>
      </div>
      
      <MioWebSideBar />
    </MioWebDiv>
  )
}

export default MioWeb