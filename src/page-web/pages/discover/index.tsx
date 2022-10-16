import { FC, useEffect, useMemo, useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import MioWebDiscoverHeader from './components/header';

import { MioWebDiscoverDiv } from './styles';

interface Props  {

}

const MioWebDiscover : FC<Props> = (props) => {

  return (
    <MioWebDiscoverDiv> 
      <MioWebDiscoverHeader />      
      <Outlet />      
    </MioWebDiscoverDiv>
  )
}

export default MioWebDiscover