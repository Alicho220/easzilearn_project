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
      margin-top: 100px;
    }
    h1 {
      font-size: 58px;
      color: #ffbb12;
      font-family: "Poppins, Helvetica, Arial, Lucida, sans-serif";
      text-align: center;
      font-weight: 800;

      line-height: 58px;
    }
    hr {
      border-top: 5px solid #fff;
      width: 100%;
      opacity: 1;
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
    /* padding: 50px; */
    img {
      width: 100%;
      height: 75%;
      padding: 50px;

      border-radius: 150px;
    }
  }
  .right-side {
    width: 50%;

    /* padding: 60px; */
    margin-top: 50px;

    p {
      color: #fff;
      font-size: 18px;
      font-family: "Raleway";
      line-height: 33px;
      margin-bottom: 20px;
      font-weight: 400;
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
    .inner-row {
      display: flex;
      flex-direction: column;
      padding: 20px;
    }

    .left-side {
      width: 100%;
      img {
        border-radius: 100px;
        width: 100%;
        height: 100%;
        padding: 10px;
      }
    }
    .right-side {
      width: 100%;

      p {
        color: #fff;
        font-size: 16px;
        font-family: "Raleway";
        line-height: 30px;
        margin-bottom: 20px;
        font-weight: 200;
      }
      span {
        color: #ffbb12;
        font-weight: 500;
      }
    }
  }
`;
