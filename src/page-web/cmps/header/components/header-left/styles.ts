import ThemeColor from "../../../../../common/ThemeColor";
import { AyayaLOGO } from "../../../../../assets/base-img";
import styled from "@emotion/styled";

interface Iprops {
  theme: string;
}

export const MioWebHeaderLeftDiv = styled.div<Iprops>`
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
    margin-right: 45px;
    color: ${p => ThemeColor[p.theme].font.light};
  }
`