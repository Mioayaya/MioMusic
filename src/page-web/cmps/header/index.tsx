import { FC, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';



import { store } from '../../../type';
import { MioWebHeaderDiv } from "./styles"
import MioWebHeaderRight from './components/header-right';
import MioWebHeaderLeft from './components/header-left';

interface Iprops {
  setShowMenu: Function;
  showMenu: boolean;
}

const MioWebHeader:FC<Iprops> = (props) => {
  const { setShowMenu,showMenu } = props;
  const THEME:string = useSelector<store.state,string>(state => state.themeSlice.theme);  
  
  return (
    <MioWebHeaderDiv theme={THEME}>
      <MioWebHeaderLeft theme={THEME} 
                        setShowMenu={setShowMenu}
                        showMenu={showMenu}
      />

      <div className="middle">中间</div>

      <MioWebHeaderRight />
      
    </MioWebHeaderDiv>
  )
}

export default MioWebHeader