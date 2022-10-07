import { FC, useEffect, useMemo, useState } from 'react';

import { MioWebSideBarDiv } from './styles';

const MioWebSideBar : FC = () => {
  const [ show,setShow ] = useState<boolean>(false);

  return (
    <MioWebSideBarDiv show={show}
                      onMouseEnter={() => setShow(true)}
                      onMouseLeave={() => setShow(false)}
    >
    </MioWebSideBarDiv>
  )
}

export default MioWebSideBar