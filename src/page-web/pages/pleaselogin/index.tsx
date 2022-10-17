import React, { FC, memo, useEffect } from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { NavLink } from 'react-router-dom'

import { LOGINPATH } from '../../../server/local-data/page-path'
import ThemeColor from '../../../common/ThemeColor'

import { storeType, stylesType } from '../../../type'
import { setLeftNavKeyAway } from '../../../store/slices/control'



const MioWebPleaseLoginDiv = styled.div<stylesType.MStylesProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${p => ThemeColor[p.theme]?.font.title};
  h2 {
    padding: 5px 0;
  }
  .btn {
    color: ${p => ThemeColor[p.theme]?.font.link};
    :hover {
      color: ${p => ThemeColor[p.theme]?.font.linkHover};
    }
  }
`

const MioWebPleaseLogin:FC = memo(() => {
  const dispatch:Dispatch<AnyAction> = useDispatch();
  const THEME:string = useSelector<storeType.state,string>(state => state.themeSlice.theme);
  
  useEffect(() => {
    dispatch(setLeftNavKeyAway());
  },[])

  return (
    <MioWebPleaseLoginDiv theme={THEME}>
      <h2>{'请先登录 (≧∀≦)ゞ'}</h2>
      <h2>please Sign In First ✨</h2>
      <NavLink to={LOGINPATH}>
        <h2 className="btn"> {'去登录 ->'} </h2>
      </NavLink>
    </MioWebPleaseLoginDiv>
  )
})

export default MioWebPleaseLogin