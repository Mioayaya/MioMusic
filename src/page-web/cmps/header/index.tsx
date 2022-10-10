import { FC, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


import { store } from '../../../type';
import { MioWebHeaderDiv } from "./styles"
import MioCMIcon from '../../../components/icon';
import MioCmSearchBar from '../search-bar';

interface Iprops {
  setShowMenu: Function;
  showMenu: boolean;
}

const MioWebHeader:FC<Iprops> = (props) => {
  const { setShowMenu,showMenu } = props;
  const THEME:string = useSelector<store.state,string>(state => state.themeSlice.theme);  
  
  return (
    <MioWebHeaderDiv theme={THEME}>
      <div className="left">
        <div className="icon-wrap" onClick={() => setShowMenu(!showMenu)}>
          <MioCMIcon iconName='#icon-menu'/>
        </div>
        <NavLink to='/home'>
          <div className="logo">
            <div className="img"/>
          </div>
        </NavLink>
        <NavLink to='/home'>
          <h2 className="title">MioMusic</h2>
        </NavLink>
        
        <MioCmSearchBar />
      </div>

      <div className="middle">中间</div>

      <div className="right">
        <div className="btns">
          <div className="last-page">{'<'}</div>
          <div className="next-page">{'>'}</div>
        </div>
      </div>
      
    </MioWebHeaderDiv>
  )
}

export default MioWebHeader