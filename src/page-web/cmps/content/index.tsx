import React, { FC, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom'
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

import { routes } from '../../../router';
import { setContainRight } from '../../../store/slices/control';

import { storeType } from '../../../type';
import { MioWebContentDiv } from './styles';
import MioWebContentLeft from './components/content-left';

interface IProps  {
  showMenu: boolean;
  showPlay: boolean;
  setShowPlay: Function;
}

const MioWebContent : FC<IProps> = (props) => {
  const { showMenu,showPlay,setShowPlay } = props;
  const dispatch:Dispatch<AnyAction> = useDispatch();
  const THEME:string = useSelector<storeType.state,string>(state => state.themeSlice.theme);  
  const containRef = useRef( null as null || {} as HTMLDivElement);

  const containScroll = (e:React.UIEvent<HTMLElement,UIEvent>) => {        
    const { scrollTop } = e.target as HTMLElement;    
    const { clientHeight } = containRef.current;
    dispatch(setContainRight({scrollTop:scrollTop,clientHeight:clientHeight}));
  }

  return (
    <MioWebContentDiv showMenu={showMenu} theme={THEME}>
      <div className="left scroll-bar">
        <MioWebContentLeft theme={THEME}/>
      </div>
      <div className="right scroll-bar"
           ref={containRef}
           onScroll={(e) => containScroll(e)}
      >
        {useRoutes(routes)}
      </div>      
    </MioWebContentDiv>
  )
}

export default MioWebContent