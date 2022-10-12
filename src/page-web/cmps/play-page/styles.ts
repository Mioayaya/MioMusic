import styled from "@emotion/styled"
import ThemeColor from "../../../common/ThemeColor";
import { styles } from "../../../type";

interface Iprops extends styles.MStylesProps {
  showPlay: boolean;
}

export const MioWebPlayPageDiv = styled.div<Iprops>`
  position: absolute;
  background-color: ${p => ThemeColor[p.theme].palyPage.background};
  width: 100%;
  height: ${props => props.showPlay?'100%':'0'};
  transition: 1s;
  bottom: 0;
  border-radius: 15px;
  overflow:hidden;
  z-index: 2;
` 