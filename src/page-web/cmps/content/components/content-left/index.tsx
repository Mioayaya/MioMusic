import { FC, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { NavLink } from 'react-router-dom';
import { Message  } from '@arco-design/web-react';

import { leftBottomNavKey, leftTopNavKey } from '../../../../../server/local-data/nav-key';
import { PLEASELOGIN } from '../../../../../server/local-data/page-path';

import { storeType } from '../../../../../type';
import { MioWebContentLeftDiv } from './styles'
import { setLeftNavKey } from '../../../../../store/slices/control';


interface IProps  {
  theme: string;
}

const MioWebContentLeft:FC<IProps> = (props) => {
  const { theme } = props;
  const dispatch:Dispatch<AnyAction> = useDispatch();
  const IsLogin:boolean = useSelector<storeType.state,boolean>(state => state.privateSlice.isLogin);
  const NavKey:string = useSelector<storeType.state,string>(state => state.controlSlice.leftNavKey);

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

  const setNavKey = (key:string):void => {
    dispatch(setLeftNavKey(key));
  }
  // React.MouseEvent<HTMLDivElement, MouseEvent>
  const createListClick = (e:React.MouseEvent<HTMLDivElement,MouseEvent>):void => {
    const { className } = e.target as HTMLElement;
    if(className==='add') {      
      return ;
    }    
  }

  const addCreateListClick = (e:React.MouseEvent<HTMLDivElement,MouseEvent>):void => {
    if(IsLogin) {

    }else {
      Message.warning('请先登录');
    }
    if(e.currentTarget.className === 'create-list') {
      return ;
    }
  }

  return (
    <MioWebContentLeftDiv theme={theme}>      
      <div className="top">
        {
          leftTopNavKey?.map(item => 
            <NavLink key={item.key}
                     to={toPath(item.path)}
                     onClick={() => setNavKey(item.key)}
            >
              <div className={NavKey===item.key?'top-nav top-nav-active':'top-nav'}>
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
                     onClick={() => setNavKey(item.key)}
            >
              <div className={NavKey===item.key?'middle-nav middle-nav-active':'middle-nav'}>
                {item.name}
              </div>
            </NavLink>  
          )
        }
      </div>

      <div className="bottom">
        <div className="create-list" onClick={e => createListClick(e)}>    
          <h2 className="title">创建歌单</h2>
          <div className="tri">▶</div>
          <div className="add" onClick={e => addCreateListClick(e)}>+</div>
        </div>
        <div className="collect-list">
          <h2 className="title">收藏歌单</h2>
          <div className="tri">▶</div>
        </div>
      </div>          

    </MioWebContentLeftDiv>
  )
}

export default MioWebContentLeft