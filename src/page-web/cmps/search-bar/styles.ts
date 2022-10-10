import styled from '@emotion/styled'

import { styles } from '../../../type'

export const MioCmSearchBarDiv = styled.div<styles.MStylesProps>`
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  width: ${p => p.width?`${p.width}px`:'200px'};
  height: ${p => p.height?`${p.height}px`:'35px'};  
  border-radius: calc(35px / 2);
  display: flex;
  align-items: center;
  padding: 0 15px;
  .search-input {
    color: #fff;
    background-color: rgba(0,0,0,0);
    width: 100%;
    margin-left: 5px;
    height: 35px;
    line-height: 35px;
    font-size: 17px;  
    border: none;
    outline: none;
    &::-webkit-input-placeholder {
      color: #fff;
    }
  }

  .icon {
    width: 28px;
    height: 28px;
  }

`