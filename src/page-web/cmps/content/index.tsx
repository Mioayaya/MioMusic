import { FC, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom'

import { routes } from '../../../router';

import { storeType } from '../../../type';
import { MioWebContentDiv } from './styles';
import MioWebContentLeft from './components/content-left';
import { setContainRight } from '../../../store/slices/control';


interface IProps  {
  showMenu: boolean;
  showPlay: boolean;
  setShowPlay: Function;
}

const MioWebContent : FC<IProps> = (props) => {
  const { showMenu,showPlay,setShowPlay } = props;
  const dispatch = useDispatch();
  const THEME:string = useSelector<storeType.state,string>(state => state.themeSlice.theme);  
  const containRef = useRef() as any;

  const containScroll = (e:any) => {    
    const t = e.target.scrollTop;
    const h = containRef.current.clientHeight;
    dispatch(setContainRight({scrollTop:t,clientHeight:h}))
  }

  return (
    <MioWebContentDiv showMenu={showMenu} theme={THEME}>
      <div className="left scroll-bar">
        <MioWebContentLeft theme={THEME}/>
      </div>
      <div className="right scroll-bar"
           ref={containRef}
           onScroll={(e) => containScroll(e)}
      >
        {useRoutes(routes)}
      </div>      
    </MioWebContentDiv>
  )
}

export default MioWebContent