import styled from "styled-components";

export const OVERALL = styled.div`
  width: 100%;
  .inner-div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 30px;
  }
  .left-side {
    width: 50%;
    margin-left: 50px;
    margin-right: 50px;
    img {
      width: 100%;
      border-radius: 100px;
      padding: 50px;
    }
  }

  .right-side {
    width: 50%;
    margin-top: 50px;

    p {
      color: #666666;
      font-size: 18px;
      font-family: "Raleway";
      line-height: 30px;
      margin-bottom: 20px;
    }

    span {
      color: #ffbb12;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 768px) {
    .inner-div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      display: center;
      width: 100%;
      margin-top: 30px;
    }
    .left-side {
      width: 100%;
      img {
        padding: 0px;
      }
    }

    .right-side {
      width: 100%;
    }
  }
`;
