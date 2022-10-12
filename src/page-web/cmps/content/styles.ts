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
    overflow-y: scroll;
    overflow-x: hidden;
    
  }
  .right {
    flex: 1;
    background-color: aliceblue;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .left {    
    ::-webkit-scrollbar {      
      width: 0;
      height: 0;      
    }
    :hover {
      ::-webkit-scrollbar {      
        width: 0.5rem;
        height: 0.5rem;
      } 
    }
  }
`