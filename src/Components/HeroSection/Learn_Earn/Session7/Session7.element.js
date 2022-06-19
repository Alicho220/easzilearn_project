import styled from "styled-components";

export const OVERALL = styled.div`
  background-color: #008e51;
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
      margin-top: 50px;
    }
    h1 {
      font-size: 58px;
      color: #ffbb12;
      font-family: "Poppins,Lucida";
      font-family: Helvetica, Arial, sans-serif;
      text-align: center;
      font-weight: 800;

      line-height: 58px;
    }
    hr {
      border-top: 5px solid #fff;
      width: 100%;
      opacity: 1;
      background-color: #fff;
      margin-top: 4rem;
      margin-bottom: 1rem;
    }
  }
  .inner-row {
    display: flex;
    flex-direction: row;
    padding: 20px;
  }
  .left-side {
    width: 60%;

    img {
      width: 100%;
      height: 75%;
      padding: 50px;

      border-radius: 150px;
    }
  }
  .right-side {
    width: 50%;
    margin-top: 50px;

    p {
      color: #fff;
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
  .numbered-session {
    display: flex;
    img {
      width: 80%;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 35px;
    .inner-row {
      display: flex;
      flex-direction: column;
      padding: 0px;
    }

    .left-side {
      width: 100%;

      img {
        border-radius: 80px;
        width: 100%;
        height: 100%;
        padding: 10px;
      }
    }
    .right-side {
      width: 100%;
      margin-top: 30px;

      p {
        color: #fff;
        font-size: 16px;
        font-family: "Raleway";
        line-height: 25px;
        margin-bottom: 20px;
      }
      span {
        color: #ffbb12;
        font-weight: 500;
      }
    }
  }
`;
