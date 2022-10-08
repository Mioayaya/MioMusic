import styled from "@emotion/styled";

interface Iprops {
  showMenu: boolean;
}

export const MioWebContentDiv = styled.div<Iprops>`
  flex: 1;
  display: flex;
  position: relative;
  .left {
    width: ${props => props.showMenu?'250px':'0'};
    background-color: blanchedalmond;
    transition: 1s;
  }
  .right {
    flex: 1;
    background-color: aliceblue;
  }
`