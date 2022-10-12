import { FC, useEffect, useMemo, useState } from 'react';
import { useRoutes } from 'react-router-dom'

import { routes } from '../../../router';
import MioWebContentLeft from './components/content-left';

import { MioWebContentDiv } from './styles';

interface IProps  {
  showMenu: boolean;
  showPlay: boolean;
  setShowPlay: Function;
}

const MioWebContent : FC<IProps> = (props) => {
  const { showMenu,showPlay,setShowPlay } = props;

  return (
    <MioWebContentDiv showMenu={showMenu}>
      <div className="left scroll-bar">
        <MioWebContentLeft/>
      </div>
      <div className="right scroll-bar">{useRoutes(routes)}</div>      
    </MioWebContentDiv>
  )
}

export default MioWebContent