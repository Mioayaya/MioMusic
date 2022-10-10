import styled from '@emotion/styled'
import ThemeColor from '../../../common/ThemeColor'

import { styles } from '../../../type'

export const MioCmSearchBarDiv = styled.div<styles.MStylesProps>`  
  color: ${p => ThemeColor[p.theme]?.font.searchTxt};
  background-color: ${p => ThemeColor[p.theme]?.public.search};
  width: ${p => p.width?`${p.width}px`:'200px'};  
  height: 35px;
  border-radius: calc(35px / 2);
  display: flex;
  align-items: center;
  padding: 0 15px;
  .search-input {
    color: ${p => ThemeColor[p.theme]?.font.searchTxt};
    background-color: rgba(0,0,0,0);
    width: 100%;
    margin-left: 5px;
    height: 35px;
    line-height: 35px;
    font-size: 17px;
    border: none;
    outline: none;
    &::-webkit-input-placeholder {
      color: ${p => ThemeColor[p.theme]?.font.searchHolder};
    }
  }

  .icon {
    width: 28px;
    height: 28px;
    :hover {
      color: ${p => ThemeColor[p.theme]?.font.searchIconHover};
    }
  }
`