import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { FC, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setLeftNavKeyAway } from '../../store/slices/control';

import { store } from '../../type';
import { MioCmNotFoundDiv } from './styles';

const MioCmNotFound:FC= () => {
  const dispatch:Dispatch<AnyAction> = useDispatch();
  const THEME:string = useSelector<store.state,string>(state => state.themeSlice.theme);

  useEffect(() => {
    dispatch(setLeftNavKeyAway());
  },[])

  return (
    <MioCmNotFoundDiv theme={THEME}>
      <h1>404 Not Found</h1>
    </MioCmNotFoundDiv>
  )
}

export default MioCmNotFound