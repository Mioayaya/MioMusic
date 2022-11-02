import { Message } from '@arco-design/web-react';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import React, { FC, memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import api from '../../../../../../../server';
import { setSongData } from '../../../../../../../store/slices/discoverHome';
import { resType } from '../../../../../../../type';

import { MioWebDhRmdSongsDiv } from './styles'

interface Iprops {
  theme: string;
  isLogin: boolean;
}

const MioWebDhRmdSongs:FC<Iprops> = memo((props) => {
  const { theme, isLogin } = props;
  const dispatch:Dispatch<AnyAction> = useDispatch();
  const [ isLoading,setIsloading] = useState<boolean>(true);

  const loadData = async () => {
    try {
      setIsloading(true);
      const { data,response } = await (
        isLogin ?
        api.discoverHome.getRecommendSongs :
        api.discoverHome.getRecommendSongsUnSign()
      ) as resType.Mpromise;
      data || Message.error(response?.status+response!.statusText);
      response || dispatch(setSongData(data?.result as resType.songs.MrmdSong[]));
    } catch(e:any) {
      Message.error(JSON.stringify(e));
    } finally {
      setIsloading(false);
    }
  }

  useEffect(() => {
    loadData();
  },[])

  return (
    <MioWebDhRmdSongsDiv theme={theme}>
      <h2>recommend-songs</h2>
    </MioWebDhRmdSongsDiv>
  )
})

export default MioWebDhRmdSongs