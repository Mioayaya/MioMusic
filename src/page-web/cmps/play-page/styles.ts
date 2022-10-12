import styled from "@emotion/styled"

interface Iprops {
  showPlay: boolean;
}

export const MioWebPlayPageDiv = styled.div<Iprops>`
  position: absolute;
  background-color: red;
  width: 100%;
  height: ${props => props.showPlay?'100%':'0'};
  transition: 1s;
  bottom: 0;
  border-radius: 15px;
  overflow:hidden;
  z-index: 2;
` 