import styled from "@emotion/styled";

export const MioWebDiscoverHeaderDiv = styled.div`  
  display: flex;
  margin-bottom: 20px;
  position: relative;
  .top-nav {
    color: #fff;
    margin-right: 10px;
    position: relative;
    ::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -2px;
      margin: auto;
      width: 80%;
      height: 3px;
      background-color: red;
    }
  }
`
