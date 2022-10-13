import { FC, useEffect, useMemo, useState } from 'react';
import { Link, Outlet } from "react-router-dom";

import { MioWebDiscoverDiv } from './styles';

interface Props  {

}

const MioWebDiscover : FC<Props> = (props) => {

  return (
    <MioWebDiscoverDiv> 
      hhhh
      <Outlet />
    </MioWebDiscoverDiv>
  )
}

export default MioWebDiscover