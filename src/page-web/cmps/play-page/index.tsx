import { FC, useEffect, useMemo, useState } from 'react';

import { MioWebPlayPageDiv } from './styles'

interface IProps  {
  setShowPlay: Function;
  showPlay: boolean
}

const MioWebPlayPage : FC<IProps> = (props) => {
  const { showPlay,setShowPlay } = props;

  useEffect(() => {
    
  },[showPlay]);

  return (
    <MioWebPlayPageDiv showPlay={showPlay}>
      <button onClick={() => setShowPlay(false)}>play</button>
    </MioWebPlayPageDiv>
  )
}

export default MioWebPlayPage