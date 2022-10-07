import { FC, useEffect, useMemo, useState } from 'react';
import MioWebContent from './cmps/content';
import MioWebSideBar from './cmps/side-bar';

import { MioWebDiv } from './styles'

const MioWeb : FC = () => {
  return (
    <MioWebDiv>
      <div className="wrap">
        <div className="top"></div>                
        <MioWebContent />
        <div className="bottom"></div>
      </div>
      
      <MioWebSideBar />
    </MioWebDiv>
  )
}

export default MioWeb