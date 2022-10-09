import React, { FC, memo } from 'react'
import styled from '@emotion/styled'

const MioCmSearchBarDiv = styled.div`
  color: #fff;
`

interface Iprops {

}

const MioCmSearchBar:FC<Iprops> = memo((props) => {
  return (
    <MioCmSearchBarDiv>
      搜索栏
    </MioCmSearchBarDiv>
  )
})

export default MioCmSearchBar