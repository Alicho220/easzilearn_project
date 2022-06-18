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
      margin-top: 80px;
    }
    h1 {
      font-size: 58px;
      line-height: 50px;
      color: #ffbb12;
      font-family: "Poppins, Helvetica, Arial, Lucida, sans-serif";
      text-align: center;
      font-weight: 800;
      line-height: 58px;
    }
    hr {
      border-top: 5px solid #fff;
      width: 80%;
      opacity: 1;
      margin-top: 4rem;
      margin-bottom: 1rem;
      background-color: #fff;
    }
  }
  .inner-row {
    display: flex;
    flex-direction: row;
    padding: 70px;
  }
  .left-side {
    width: 50%;
    img {
      width: 100%;
      border-radius: 150px;
    }
  }
  .right-side {
    width: 50%;
    padding-left: 50px;

    p {
      color: #fff;
      font-size: 18px;
      font-family: "Raleway";
      line-height: 25px;
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
    .inner-div {
      display: flex;
      flex-direction: column;
    }
    .inner-row {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px;
    }
    .left-side {
      width: 100%;
      margin-bottom: 50px;

      img {
        border-radius: 100px;
      }
    }
    .right-side {
      width: 100%;
    }
  }
`;
