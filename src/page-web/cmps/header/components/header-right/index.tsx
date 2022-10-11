import { FC, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { AVATAR } from '../../../../../assets/base-img';

import { store } from '../../../../../type';
import { MioWebHeaderRightDiv } from './styles';
import MioCMIcon from '../../../../../components/icon';

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
        ? <div className="avatar">
            {
              // src ? img : default
            }
            <img src="" alt="" className="img" />
            <span className="name"></span>
          </div>
        : <div className="avatar">
            <img src={AVATAR} alt="默认头像" className="img" />
          </div>
      }

      <MioCMIcon iconName="#icon-yifu" />
      <MioCMIcon iconName="#icon-messages" />
      <div className="more">
        <MioCMIcon iconName="#icon-settings" />        
      </div>

      
    </MioWebHeaderRightDiv>
  )
}

export default MioWebHeaderRight