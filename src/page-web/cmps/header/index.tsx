import { FC, useEffect, useMemo, useState } from 'react';

import { MioWebHeaderDiv } from "./styles"

interface Iprops {
  setShowMenu: Function;
  showMenu: boolean;
}

const MioWebHeader : FC<Iprops> = (props) => {
  const { setShowMenu,showMenu } = props;

  return (
    <MioWebHeaderDiv>
      <button onClick={() => setShowMenu(!showMenu)}>show</button>
    </MioWebHeaderDiv>
  )
}

export default MioWebHeader