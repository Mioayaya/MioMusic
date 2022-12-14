import { FC, useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { HOMEPATH } from '../../../../../server/local-data/page-path';

import { MioWebHeaderLeftDiv } from './styles';
import MioCMIcon from '../../../../../components/icon';
import MioCmSearchBar from '../../../search-bar';

interface IProps  {
  theme: string;
  setShowMenu: Function;
  showMenu: boolean;
}

const MioWebHeaderLeft:FC<IProps> = (props) => {
  const { theme,setShowMenu,showMenu } = props;

  return (
    <MioWebHeaderLeftDiv theme={theme}>
      <div className="icon-wrap" onClick={() => setShowMenu(!showMenu)}>
        <MioCMIcon iconName='#icon-menu'/>
      </div>

      <NavLink to={HOMEPATH}>
        <div className="logo">
          <div className="img"/>
        </div>
      </NavLink>
      <NavLink to={HOMEPATH}>
        <h2 className="title">MioMusic</h2>
      </NavLink>
      
      <MioCmSearchBar />

    </MioWebHeaderLeftDiv>
  )
}

export default MioWebHeaderLeft