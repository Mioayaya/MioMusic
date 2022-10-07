import { FC, useEffect, useMemo, useState } from 'react';
import MioWebContent from './cmps/content';

import { MioWebDiv } from './styles'

const MioWeb : FC = () => {
  return (
    <MioWebDiv>
      <div className="wrap">
        <div className="top"></div>                
        <MioWebContent />        
        <div className="bottom"></div>
      </div>      
    </MioWebDiv>
  )
}

export default MioWeb