import styled from "@emotion/styled";
import ThemeColor from "../../../../../common/ThemeColor";
import { stylesType } from "../../../../../type";

interface Iprops extends stylesType.MStylesProps {  
}

export const MioWebContentLeftDiv = styled.div<Iprops>`  
  height: 0;
  white-space: nowrap;  
  padding: 10px 0 0 15px;
  user-select: none;

  .top-nav,.middle-nav {
    color: ${p => ThemeColor[p.theme]?.font.menuLeft};
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    padding-left: 5px;
    margin-bottom: 5px;
    border-radius: 2px;
    :hover {
      color: ${p => ThemeColor[p.theme]?.font.menuLeftHover};
      background-color: ${p => ThemeColor[p.theme]?.public.menuHover};
    }
  }
  .top-nav-active,.middle-nav-active {
    color: ${p => ThemeColor[p.theme]?.font.menuLeftactive};
    font-size: 18px;
    font-weight: 800;
    background-color: ${p => ThemeColor[p.theme]?.public.menuActive};
    :hover {
      color: ${p => ThemeColor[p.theme]?.font.menuLeftactive};
    }
  }

  .title {    
    color: ${p => ThemeColor[p.theme]?.font.menuTitle};
    font-size: 14px;
    font-weight: 400;
  }

  .top {
    
  }

  .middle {
    
  }

  .bottom {
    .create-list,.collect-list {      
      display: flex;
      position: relative;
      align-items: center;      
      cursor: pointer;
    }
    .create-list {
      margin-bottom: 5px;
    }
    .tri {    
      margin-left: 5px;
      transition: all .5s;
      color: ${p => ThemeColor[p.theme]?.font.menuTri};
      :hover {      
        transform: rotate(90deg);
        color: ${p => ThemeColor[p.theme]?.font.menuTriHover};
      }
    }
    .add {
      color: #fff;
      position: absolute;
      left: 210px;
    }
  }



`