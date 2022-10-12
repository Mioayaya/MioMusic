import styled from "@emotion/styled";

import ThemeColor from "../../../common/ThemeColor";

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
  z-index: 1;
  .middle {
    flex: 1;
    color: #fff;
    display: flex;
  }

`