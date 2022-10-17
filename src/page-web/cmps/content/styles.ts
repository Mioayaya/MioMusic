import styled from "@emotion/styled";
import ThemeColor from "../../../common/ThemeColor";
import { stylesType } from "../../../type";

interface Iprops extends stylesType.MStylesProps {
  showMenu: boolean;
}

export const MioWebContentDiv = styled.div<Iprops>`
  flex: 1;
  display: flex;
  position: relative;
  background-color: ${p => ThemeColor[p.theme].content.background};
  .left {
    width: ${props => props.showMenu?'250px':'0'};    
    transition: 1s;
    overflow-y: scroll;
    overflow-x: hidden;
    border-right: 1px solid ${p => ThemeColor[p.theme].content.border};
  }
  .right {
    flex: 1;    
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .scroll-bar {
    ::-webkit-scrollbar-thumb {      
      background-color: ${p => ThemeColor[p.theme].public.scrollBar};
    }
  }

  .left {    
    ::-webkit-scrollbar {      
      width: 0;
      height: 0;      
    }
    :hover {
      ::-webkit-scrollbar {      
        width: 8px;
        height: 8px;
      } 
    }
  }
`