import { FC, useEffect, useMemo, useState } from 'react';

import { MioWebContentLeftDiv } from './styles'

interface IProps  {
  theme: string;
}

const MioWebContentLeft:FC<IProps> = (props) => {
  const { theme } = props;
  return (
    <MioWebContentLeftDiv theme={theme}>
      menu      
      <p>132</p>
      <p>132</p>
      <p>132</p>
      <p>132</p>
      <p>132</p>
      <p>132</p>
      <p>132</p>
      <p>132</p>
      <p>132</p>
      <p>132</p>
      <p>132</p>
      <p>132</p>
      <p>132</p>
      <p>132</p>
      <p>132</p>
      <p>132</p>
      <p>132</p>
      <p>132</p>
      <p>132</p>
      <p>132</p>
      <p>132</p>
      <p>132</p>
      <p>132</p>
    </MioWebContentLeftDiv>
  )
}

export default MioWebContentLeft