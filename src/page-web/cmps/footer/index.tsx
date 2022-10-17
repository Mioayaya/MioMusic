import { FC, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { storeType } from '../../../type';

import { MioWebFooterDiv } from './styles';

interface Iprops {
  setShowPlay: Function;
  showPlay: boolean;
}

const MioWebFooter : FC<Iprops> = (props) => {
  const { setShowPlay,showPlay } = props;
  const THEME:string = useSelector<storeType.state,string>(state => state.themeSlice.theme);

  const audioContext:AudioContext = new window.AudioContext;
  
  return (
    <MioWebFooterDiv showPlay={showPlay} theme={THEME}>
      <button onClick={() => setShowPlay(true)}>play</button>
    </MioWebFooterDiv>
  )
}

export default MioWebFooter