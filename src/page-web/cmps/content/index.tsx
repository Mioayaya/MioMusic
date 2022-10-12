import { FC, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom'

import { routes } from '../../../router';

import { store } from '../../../type';
import { MioWebContentDiv } from './styles';
import MioWebContentLeft from './components/content-left';


interface IProps  {
  showMenu: boolean;
  showPlay: boolean;
  setShowPlay: Function;
}

const MioWebContent : FC<IProps> = (props) => {
  const { showMenu,showPlay,setShowPlay } = props;
  const THEME:string = useSelector<store.state,string>(state => state.themeSlice.theme);

  return (
    <MioWebContentDiv showMenu={showMenu} theme={THEME}>
      <div className="left scroll-bar">
        <MioWebContentLeft theme={THEME}/>
      </div>
      <div className="right scroll-bar">{useRoutes(routes)}</div>      
    </MioWebContentDiv>
  )
}

export default MioWebContent