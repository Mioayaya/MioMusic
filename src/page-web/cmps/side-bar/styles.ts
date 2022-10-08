import styled from "@emotion/styled";

interface Iprops {
  show: boolean;
}

export const MioWebSideBarDiv = styled.div<Iprops>`
  position: absolute;
  right: 0;
  top: 0;
  width: ${props => props.show?'350px':'0.5px'};
  height: 100%;
  background-color: black;
  transition: 0.5s;
`