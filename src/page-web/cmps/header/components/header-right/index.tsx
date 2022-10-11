import { FC, useEffect, useMemo, useState } from 'react';

import { MioWebHeaderRightDiv } from './styles';

interface IProps  {

}

const MioWebHeaderRight:FC<IProps> = () => {
  return (
    <MioWebHeaderRightDiv>
      <div className="btns">
        <div className="last-page">{'<'}</div>
        <div className="next-page">{'>'}</div>
      </div>
    </MioWebHeaderRightDiv>
  )
}

export default MioWebHeaderRight