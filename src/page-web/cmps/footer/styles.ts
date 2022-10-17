import styled from "@emotion/styled";
import ThemeColor from "../../../common/ThemeColor";
import { stylesType } from "../../../type";

interface Iprops extends stylesType.MStylesProps{
  showPlay: boolean;
}

export const MioWebFooterDiv = styled.div<Iprops>`
  flex-shrink: 0;
  width: 100%;
  height: ${props => props.showPlay?'75px':'0'};
  overflow: hidden;
  transition: 1s;
  background-color: ${p => ThemeColor[p.theme].public.headerFooter};
  border-top: 1px solid ${p => ThemeColor[p.theme].footer.border};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`