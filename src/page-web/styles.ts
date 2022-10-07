import styled from "@emotion/styled";

export const MioWebDiv = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 75px 150PX;
  
  .wrap {
    width: 100%;
    height: 100%;    
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    position: relative;
    .top {
      flex-shrink: 0;
      width: 100%;
      height: 75px;      
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }
    .bottom {
      flex-shrink: 0;
      width: 100%;
      height: 75px;            
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
    }    
  }
`