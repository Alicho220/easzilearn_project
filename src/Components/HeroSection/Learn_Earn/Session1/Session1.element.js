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
    padding: 70px;
    margin-left: 30px;
    img {
      width: 100%;
      border-radius: 100px;
    }
  }

  .right-side {
    padding: 70px;
    width: 50%;
    margin-left: -20px;

    p {
      color: #666666;
      font-size: 18px;
      font-family: "Raleway";
      line-height: 30px;
      margin-bottom: 20px;
    }

    span {
      color: #ffbb12;
      /* font-size: ; */
      font-weight: 600;
    }
  }

  @media screen and (max-width: 768px) {
    .inner-div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      margin-top: 30px;
    
    }
    .left-side {
      width: 100%;
    }

    .right-side {
      width: 100%;
    }
  }
`;
