import styled from "@emotion/styled";

interface Iprops {
  showPlay: boolean;
}

export const MioWebFooterDiv = styled.div<Iprops>`
  flex-shrink: 0;
  width: 100%;
  height: ${props => props.showPlay?'75px':'0'};
  overflow: hidden;
  transition: 1s;
  background-color: antiquewhite;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`