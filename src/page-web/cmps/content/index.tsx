import { FC, useEffect, useMemo, useState } from 'react';
import { useRoutes } from 'react-router-dom'

import { routes } from '../../../router';

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
      <div className="left">{showMenu?'true':'false'}</div>
      <div className="right">{useRoutes(routes)}</div>      
    </MioWebContentDiv>
  )
}

export default MioWebContent