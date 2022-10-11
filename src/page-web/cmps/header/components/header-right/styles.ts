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

  .message {

  }

  .avatar {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    /* background-color: #eee; */
    overflow: hidden;
  }

  .more {
    color: #fff;
    display: flex;
    align-items: center;
  }

  .icon {
    width: 30px;
    height: 30px;
    color: red;
  }
`