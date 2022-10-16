import React, { FC, memo } from 'react'
import { NavLink } from 'react-router-dom'

import { discoverNavKey } from '../../../../../server/local-data/nav-key'

import { MioWebDiscoverHeaderDiv } from './styles'

interface Iprops {

}

const MioWebDiscoverHeader:FC<Iprops> = memo((props) => {
  return (
    <MioWebDiscoverHeaderDiv>
      {
        discoverNavKey?.map(item =>
          <NavLink to={item.path}                   
                   key={item.key}
          > 
            <h2 className="top-nav">{item.name}</h2>      
          </NavLink>
        )
      }
    </MioWebDiscoverHeaderDiv>
  )
})

export default MioWebDiscoverHeader