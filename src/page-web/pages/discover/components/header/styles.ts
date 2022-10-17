import styled from "@emotion/styled";
import { styles } from "../../../../../type";

interface Iprops extends styles.MStylesProps {
  moveBar: styles.MmoveBar
}

export const MioWebDiscoverHeaderDiv = styled.div<Iprops>`  
  display: flex;
  margin-bottom: 20px;
  position: relative;
  .top-nav {
    color: #fff;
    padding-right: 10px;
    position: relative;
    white-space: nowrap;
    font-size: 15px;
    font-weight: 400;
  }
  .top-nav-active {
    font-size: 16px;
    font-weight: 600;
  }
  ::after {
    content: "";
    position: absolute;
    left: ${p => p.moveBar.left+'px'};
    bottom: -2px;    
    width: ${p => p.moveBar.width+'px'};
    height: 3px;
    background-color: red;
    transition: all .25s;
  }
`
