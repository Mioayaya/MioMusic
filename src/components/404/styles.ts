import styled from '@emotion/styled'
import ThemeColor from '../../common/ThemeColor'
import { stylesType } from '../../type'

export const MioCmNotFoundDiv = styled.div<stylesType.MStylesProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => ThemeColor[p.theme]?.font.title};
`