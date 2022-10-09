import { FC, useEffect, useMemo, useState } from 'react';

import { MioWebFooterDiv } from './styles';

interface Iprops {
  setShowPlay: Function;
  showPlay: boolean;
}

const MioWebFooter : FC<Iprops> = (props) => {
  const { setShowPlay,showPlay } = props;

  const audioContext:AudioContext = new window.AudioContext;
  
  return (
    <MioWebFooterDiv showPlay={showPlay}>
      <button onClick={() => setShowPlay(true)}>play</button>
    </MioWebFooterDiv>
  )
}

export default MioWebFooter