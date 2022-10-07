import { FC, useEffect, useMemo, useState } from 'react';
import { useRoutes } from 'react-router-dom'

import { routes } from '../../../router';

import { MioWebContentDiv } from './styles';

interface Props  {

}

const MioWebContent : FC<Props> = () => {
  return (
    <MioWebContentDiv>
      <div className="left"></div>
      <div className="right">{useRoutes(routes)}</div>
    </MioWebContentDiv>
  )
}

export default MioWebContent