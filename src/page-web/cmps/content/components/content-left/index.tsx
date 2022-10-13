import { FC, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Message  } from '@arco-design/web-react';

import { leftBottomNavKey, leftTopNavKey } from '../../../../../server/local-data/nav-key';
import { PLEASELOGIN } from '../../../../../server/local-data/page-path';

import { store } from '../../../../../type';
import { MioWebContentLeftDiv } from './styles'

interface IProps  {
  theme: string;
}

const MioWebContentLeft:FC<IProps> = (props) => {
  const { theme } = props;
  const IsLogin:boolean = useSelector<store.state,boolean>(state => state.privateSlice.isLogin);
  const NavKey:string = useSelector<store.state,string>(state => state.controlSlice.leftNavKey);

  // methods
  const toPath = (path:string,type?:number):string => {
    let _path = path;
    if(path==='/dynamic') {
      IsLogin ? '': _path = PLEASELOGIN;
    }
    if(type===1) {
      IsLogin ? '': _path = PLEASELOGIN;
    }
    return _path;
  }

  return (
    <MioWebContentLeftDiv theme={theme}>      
      <div className="top">
        {
          leftTopNavKey?.map(item => 
            <NavLink key={item.key}
                     to={toPath(item.path)}
            >
              <div className="top-nav">
                {item.name}
              </div>
            </NavLink>
          )
        }
      </div>

      <div className="middle">
        <h2 className="title">我的音乐</h2>
        {
          leftBottomNavKey?.map(item =>
            <NavLink key={item.key}
                     to={toPath(item.path,1)}
            >
              <div className="middle-nav">
                {item.name}
              </div>
            </NavLink>  
          )
        }
      </div>

      <div className="bottom">
        <div className="create-list">创建歌单</div>
        <div className="collect-list">收藏歌单</div>
      </div>
      
      <button onClick={() => Message.warning('请先登录')}>aleart</button>

    </MioWebContentLeftDiv>
  )
}

export default MioWebContentLeft