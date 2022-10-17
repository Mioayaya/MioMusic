import styled from "@emotion/styled";
import ThemeColor from "../../../../../common/ThemeColor";
import { stylesType } from "../../../../../type";

interface Iprops extends stylesType.MStylesProps {
  avatarHover: boolean
}

export const MioWebHeaderRightDiv = styled.div<Iprops>`
  display: flex;
  align-items: center;
  color: ${p => ThemeColor[p.theme].font.icon};

  .btns {
    width: 55px;
    display: flex;
    justify-content: space-between;
    user-select: none;
    cursor: pointer;
    .last-page,.next-page {
      color: ${p => ThemeColor[p.theme].font.btnRoute};
      width: 25px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      background-color: rgba(255,255,255,0.1);
      border-radius: 50%;
    }    
    .btn-forbid {
      color: ${p => ThemeColor[p.theme].font.btnRouteForbid};
    }
  }

  .avatar {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    /* background-color: #eee; */
    overflow: hidden;
    margin: 0 3px 0 10px;
    cursor: pointer;
  }

  .avatar-login {
    ${p => {
      if(p.avatarHover) {
        return `transform: translate(-25px,25px) scale(1.5);`
      }
    }}    
    transition: all 1s;
    z-index: 1;
  }

  .avatar-card {
    position: absolute;
    background-color: red;
    top: 75px;
    right: 190px;
    width: 200px;
    height: 150px;
    transform: translateX(50%);
    visibility: ${p => p.avatarHover?'visible':'hidden'};
    opacity: ${p => p.avatarHover?'1':'0'};
    transition: all 1s;
  }

  .icon {
    width: 30px;
    height: 30px;
    margin-left: 5px;
  }

  .icon,.name {
    cursor: pointer;
    :hover {
      color: ${p => ThemeColor[p.theme].font.iconHover};
    }
  }
`