import styled from "@emotion/styled";

export const MioWebHeaderRightDiv = styled.div`
  display: flex;
  align-items: center;
  color: #111;

  .btns {
    width: 58px;
    display: flex;
    justify-content: space-between;
    user-select: none;
    .last-page,.next-page {
      color: #fff;
      width: 25px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      background-color: red;
      border-radius: 50%;
    }
  }

  .avatar {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #eee;
    overflow: hidden;
  }
`