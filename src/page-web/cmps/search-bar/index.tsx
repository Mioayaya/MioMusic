import React, { FC, memo, useState } from 'react'
import { ChangeEvent, FormEvent } from 'react'

import { MioCmSearchBarDiv } from './styles'
import MioCMIcon from '../../../components/icon'
import { useSelector } from 'react-redux'
import { storeType } from '../../../type'

interface Iprops {
  width?: number
}

const MioCmSearchBar:FC<Iprops> = memo((props) => {
  const { width } = props;
  const [ searchTxt,setSearchTxt ] = useState<string>('');
  const THEME = useSelector<storeType.state,string>(state => state.themeSlice.theme);

  /* methods */

  // submit 
  const searchSubmit = (e:FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    console.log(searchTxt);
  }

  const changeInputValue = (e:ChangeEvent<HTMLInputElement>):void => {    
    setSearchTxt(e.target.value);
  }

  const focusInput = ():void => {
    console.log('得到焦点');
  }

  const blurInput = ():void => {
    console.log('失去焦点');
  }

  return (
    <MioCmSearchBarDiv width={width} theme={THEME}>
      <MioCMIcon iconName='#icon-sousuo1'/>
      <form action="" onSubmit={e => searchSubmit(e)}>
        <input type="search"
               className='search-input'
               placeholder='beautiful world'
               onChange={e => changeInputValue(e)}
               onFocus={() => focusInput()}
               onBlur={() => blurInput()}
        />
      </form>
    </MioCmSearchBarDiv>
  )
})

export default MioCmSearchBar