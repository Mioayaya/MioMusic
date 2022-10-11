import { FC, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { store } from '../../../../../type';

import { MioWebHeaderRightDiv } from './styles';

interface IProps  {

}

const MioWebHeaderRight:FC<IProps> = () => {
  const IsLogin = useSelector<store.state,boolean>(state => state.privateSlice.isLogin);  
  
  return (
    <MioWebHeaderRightDiv>
      <div className="btns">
        <div className="last-page">{'<'}</div>
        <div className="next-page">{'>'}</div>
      </div>
      {
        IsLogin 
        ? <div className="avatar">登</div>
        : <div className="avatar">未</div>
      }
      
    </MioWebHeaderRightDiv>
  )
}

export default MioWebHeaderRight