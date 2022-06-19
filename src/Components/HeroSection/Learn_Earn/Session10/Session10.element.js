import styled from "styled-components";

export const OVERALL = styled.div`
  background-color: #081d3c;
  display: flex;

  justify-content: center;
  align-items: center;
  .inner-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
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
      background-color: #fff;
    }
    h1 {
      font-size: 52px;
      line-height: 52px;
      color: #ffbb12;
      text-align: center;
      font-family: "Poppins,Lucida";
      font-family: Helvetica, Arial, sans-serif;
    }
  }
  .center-div {
    display: flex;
  }
  .left-side {
    display: flex;
    flex-direction: column;
    width: 50%;

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
    width: 50%;

    img {
      width: 100%;
      height: 80%;

      border-radius: 150px;
    }
  }
  .numbered-session {
    display: flex;

    h2 {
      margin-top: 0px;
    }

    img {
      width: 60%;
    }
  }

  .button-div {
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
  }
  .left-btn {
    width: 50%;
    button {
      padding: 18px;
      font-size: 20px;
      width: 300px;
      margin-left: 30px;
      background-color: #008e51;
      color: #fff;
      font-family: "Raleway";
      font-weight: bold;
      font-size: 20px;
      box-shadow: none;
      border-radius: 10px;
      border: none;
      margin-right: 50px;
    }
  }
  .right-btn {
    width: 50%;
    button {
      padding: 18px;
      font-size: 20px;
      width: 300px;
      background-color: #008e51;
      color: #fff;
      font-family: "Raleway";
      font-weight: bold;
      font-size: 20px;
      box-shadow: none;
      border-radius: 10px;
      border: none;
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 25px;
    .center-div {
      display: flex;
      flex-direction: column;
    }
    .left-side {
      width: 100%;

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
      margin-bottom: 40px;
      /* padding: 20px; */

      img {
        border-radius: 80px;
        width: 100%;
      }
    }
    .numbered-session {
      display: flex;
      margin-bottom: 1rem;

      img {
        width: 50%;
      }
      p {
        margin-left: 0px;
      }
      h2 {
        margin-left: 0px;
      }
    }
    .button-div {
      display: flex;
      flex-direction: column;
    }
    .left-btn {
      width: 100%;
      button {
        margin-right: 0px;
        margin-left: 0px;
      }
    }
    .right-btn {
      width: 100%;
      margin-top: 30px;
    }
  }
`;
