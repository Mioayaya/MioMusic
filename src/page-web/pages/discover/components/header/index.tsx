import React, { FC, memo, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { discoverNavKey } from '../../../../../server/local-data/nav-key'
import { styles } from '../../../../../type'

import { MioWebDiscoverHeaderDiv } from './styles'

interface Iprops {

}

const MioWebDiscoverHeader:FC<Iprops> = memo((props) => {
  const [ activeKey,setActiveKey ] = useState<string>('0-0');  
  const [ activeMoveBar,setActiveMoveBar] = useState<styles.MmoveBar>({left:6.4,width:51.2});
  const [ moveBar,setMoveBar] = useState<styles.MmoveBar>({left:6.4,width:51.2});
 
  const navMouseClick = (key:string,e:React.MouseEvent<HTMLHeadingElement,MouseEvent>) => {
    const { offsetLeft, clientWidth } = e.currentTarget;
    const p:styles.MmoveBar = {left:offsetLeft+(clientWidth-10)*0.1,width:(clientWidth-10)*0.8};    
    setActiveMoveBar(p);
    setActiveKey(key);        
  }
  
  const navMouseEnther = (e:React.MouseEvent<HTMLHeadingElement,MouseEvent>) => {    
    const { offsetLeft, clientWidth } = e.currentTarget;
    const p:styles.MmoveBar = {left:offsetLeft+(clientWidth-10)*0.1,width:(clientWidth-10)*0.8};
    console.log(clientWidth,offsetLeft);
        
    setMoveBar(p);
  }

  const navMouseLeave = () => {    
    setMoveBar(activeMoveBar);
  }

  return (
    <MioWebDiscoverHeaderDiv moveBar={moveBar}>
      {
        discoverNavKey?.map(item =>
          <NavLink to={item.path}                   
                   key={item.key}
          > 
            <h2 className={activeKey===item.key?'top-nav top-nav-active':'top-nav'}
                onClick={(e) => navMouseClick(item.key,e)}
                onMouseEnter={(e) => navMouseEnther(e)}
                onMouseLeave={() => navMouseLeave()}
            >{item.name}</h2>      
          </NavLink>
        )
      }
    </MioWebDiscoverHeaderDiv>
  )
})

export default MioWebDiscoverHeader