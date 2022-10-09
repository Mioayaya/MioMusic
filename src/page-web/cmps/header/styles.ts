import styled from "@emotion/styled";

import ThemeColor from "../../../common/ThemeColor";
import { AyayaLOGO } from "../../../assets/base-img";

interface Iprops {
  theme: string;
}

export const MioWebHeaderDiv = styled.div<Iprops>`
  flex-shrink: 0;
  width: 100%;
  height: 75px;  
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  white-space:nowrap;
  background-color: ${p => ThemeColor[p.theme].public.headerFooter};
  .left {
    display: flex;
    align-items: center;
    .icon-wrap {
      color: ${p => ThemeColor[p.theme].font.icon};
      :hover {
        color: ${p => ThemeColor[p.theme].font.iconHover};
      }
    }
    .logo {
      width: 40px;
      height: 40px;
      margin: 0 10px;
      .img {
        background-image: url(${AyayaLOGO});
        border-radius: 50%;
      }
    }
    .title {
      margin-right: 20px;
      color: ${p => ThemeColor[p.theme].font.light};
    }
  }
  
  .middle {
    flex: 1;
    color: #fff;
    display: flex;
    justify-content: center;    
  }
`