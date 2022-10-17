import { FC, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { AVATAR } from '../../../../../assets/base-img';

import { storeType } from '../../../../../type';
import { MioWebHeaderRightDiv } from './styles';
import MioCMIcon from '../../../../../components/icon';

interface IProps  {
  theme: string;
}

const MioWebHeaderRight:FC<IProps> = (props) => {
  const { theme } = props;
  const IsLogin = useSelector<storeType.state,boolean>(state => state.privateSlice.isLogin);  
  const [ avatarHover,setAvatarHover ] = useState<boolean>(false);

  return (
    <MioWebHeaderRightDiv theme={theme} avatarHover={avatarHover}>
      <div className="btns">
        <div className="last-page">{'<'}</div>
        <div className="next-page">{'>'}</div>
      </div>      
                
      {
        IsLogin 
        ? <>
            <div className="avatar avatar-login"
                 onMouseEnter={() => setAvatarHover(true)}
                 onMouseLeave={() => setAvatarHover(false)}
            >
              {
                // src ? img : default
              }
              <img src={AVATAR} alt="" className="img" />
            </div>          
            <span className="name">test</span>
            <div className="avatar-card"
                 onMouseEnter={() => setAvatarHover(true)}
                 onMouseLeave={() => setAvatarHover(false)}
            >
              card
            </div>
          </>
        : <>
            <div className="avatar">
              <img src={AVATAR} alt="默认头像" className="img" />
            </div>
            <span className="name">小路绫</span>
          </>
      }
      
      <MioCMIcon iconName="#icon-messages" />   
      <MioCMIcon iconName="#icon-yifu" />
      <MioCMIcon iconName="#icon-settings" />
                  
    </MioWebHeaderRightDiv>
  )
}

export default MioWebHeaderRight