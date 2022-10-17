import styled from "@emotion/styled";

interface Iprops {
  show: boolean;
}

export const MioWebSideBarDiv = styled.div<Iprops>`
  position: fixed;
  right: 0;
  top: 0;
  width: ${props => props.show?'350px':'0.5px'};
  height: 100%;
  background-color: #000;
  transition: 0.5s;
  z-index: 99;
`