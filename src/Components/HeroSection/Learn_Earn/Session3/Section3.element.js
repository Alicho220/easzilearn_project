import styled from "styled-components";

export const OVERALL = styled.div`
  .inner-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .header-div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      margin-top: 100px;
    }
    h1 {
      font-size: 58px;
      color: #008e51;
      font-family: "Poppins, Helvetica, Arial, Lucida, sans-serif";
      text-align: center;
      font-weight: 900;

      line-height: 48px;
    }
    hr {
      border-top: 5px solid #081d3c;
      width: 80%;
      opacity: 1;
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }
  .inner-row {
    display: flex;
    flex-direction: row;
    padding: 10px;
  }
  .left-side {
    width: 50%;
    padding: 50px;
    margin-right: 50px;

    img {
      width: 100%;
      border-radius: 150px;
    }
  }
  .right-side {
    width: 50%;

    p {
      color: #666666;
      font-size: 18px;
      font-family: "Raleway";
      line-height: 25px;
      margin-bottom: 20px;
    }

    span {
      color: #ffbb12;
      font-weight: 800;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 35px;

    .inner-div {
      display: flex;
      flex-direction: column;
    }
    .inner-row {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0px;
    }
    .inner-row {
      display: flex;
      flex-direction: column;
    }
    .left-side {
      width: 100%;
      margin-bottom: 50px;
      padding: 0px;
      margin-right: 0px;
      img {
        border-radius: 80px;
      }
    }
    .right-side {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;

      p {
        color: #666666;
        font-size: 16px;
        font-family: "Raleway";
        line-height: 25px;
        margin-bottom: 20px;
      }

      span {
        color: #ffbb12;
        font-weight: 800;
      }
    }
  }
`;
