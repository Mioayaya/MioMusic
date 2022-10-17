import { FC, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { storeType } from '../../../type';

import { MioWebPlayPageDiv } from './styles'

interface IProps  {
  setShowPlay: Function;
  showPlay: boolean
}

const MioWebPlayPage : FC<IProps> = (props) => {
  const { showPlay,setShowPlay } = props;
  const THEME:string = useSelector<storeType.state,string>(state => state.themeSlice.theme);

  useEffect(() => {
    
  },[showPlay]);

  return (
    <MioWebPlayPageDiv showPlay={showPlay} theme={THEME}>
      <button onClick={() => setShowPlay(false)}>play</button>
    </MioWebPlayPageDiv>
  )
}

export default MioWebPlayPage