import styled from "styled-components";

export const OVERALL = styled.div`
  .inner-div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 80px;
  }
  .left-side {
    width: 50%;
    margin-left: 50px;
    margin-right: 50px;
    img {
      width: 100%;
      border-radius: 100px;
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
    width: 100%;
    .inner-div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      display: center;
      padding: 25px;

      margin-top: 30px;
    }
    .left-side {
      width: 100%;
      margin-left: 0px;
      img {
        border-radius: 80px;
      }
    }

    .right-side {
      width: 100%;
      padding: 0px;
      p {
        color: #666666;
        font-size: 16px;
        font-family: "Raleway";
        line-height: 25px;
        margin-bottom: 20px;
      }
    }
  }
`;
