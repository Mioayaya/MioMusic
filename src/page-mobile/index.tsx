import { FC, useEffect, useMemo, useState } from 'react';
import { useRoutes } from 'react-router-dom'

import { routes } from '../router';

interface Props  {

}

const MioMobile : FC<Props> = () => {
  return (
    <div>
      我是手机端
      <div>{useRoutes(routes)}</div> 
    </div>
  )
}

export default MioMobile