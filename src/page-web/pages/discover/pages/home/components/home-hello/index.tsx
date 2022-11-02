import { FC, useEffect, useMemo, useState, memo } from 'react';
import { HELLOWORDS } from '../../../../../../../common/sayHello';
import { timesMethods } from '../../../../../../../utils';

import { MioWebDhHelloDiv } from './styles';

interface IProps  {
  theme: string;
  isLogin: boolean;
}

const MioWebDhHello:FC<IProps> = memo((props) => {
  const { theme } = props;
  
  const timeType = useMemo(() => {
    console.log(1);    
    return timesMethods.getTimeType();
  },[])

  return (
    <MioWebDhHelloDiv theme={theme}>
      <h2>{HELLOWORDS[timeType]}</h2>            
    </MioWebDhHelloDiv>
  )
})

export default MioWebDhHello