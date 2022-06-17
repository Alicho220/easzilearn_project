import styled from "styled-components";

export const OVERALL = styled.div`
  background-color: #081d3c;
  .inner-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .header-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    hr {
      border-top: 5px solid #fff;
      width: 100%;
      opacity: 1;
      margin-bottom: 4rem;
      margin-top: 3rem;
    }
    h1 {
      font-size: 52px;
      line-height: 52px;
      color: #ffbb12;
      text-align: center;
    }
  }
  .center-div {
    display: flex;

    width: 100%;
  }
  .left-side {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 70px;

    p {
      font-style: "Raleway";
      font-size: 18px;
      color: #fff;
      line-height: 35px;
    }
    h2 {
      color: #ffbb12;
    }
    span {
      color: #ffbb12;
      font-weight: 600;
    }
  }
  .right-side {
    display: flex;
    flex-direction: column;
    width: 50%;

    padding: 70px;
    img {
      width: 100%;
      border-radius: 150px;
    }
  }
  .numbered-session {
    display: flex;
    margin-bottom: 1rem;

    img {
      width: 70%;
    }
  }
  .button-div {
    display: flex;
    flex-direction: row;
    button {
      background-color: #008e51;
      color: #fff;
      font-family: "Raleway";
      font-weight: bold;
      font-size: 20px;
      box-shadow: none;
      border-radius: 10px;
      border: none;
      padding: 20px;
      margin: 10px;
    }
    margin-bottom: 100px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    .center-div {
      display: flex;
      flex-direction: column;
    }
    .left-side {
      /* width: 100%; */
      padding: 30px;
      p {
        font-style: "Raleway";
        font-size: 16px;
        color: #fff;
        line-height: 30px;
      }
      h2 {
        color: #ffbb12;
        font-size: 20px;
      }
      span {
        color: #ffbb12;
        font-weight: 600;
      }

      img {
        width: 30%;
      }
    }
    .right-side {
      width: 100%;
      padding: 30px;

      img {
        width: 100%;
        border-radius: 100px;
      }
    }
    .numbered-session {
      display: flex;
      margin-bottom: 1rem;

      img {
        width: 50%;
      }
    }
  }
  .button-div {
    display: flex;
    flex-direction: row;
    button {
      width: 80%;
      padding: 10px;
      font-size: 15px;
    }
  }
`;
