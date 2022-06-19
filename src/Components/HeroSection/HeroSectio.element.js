import styled from "styled-components";

export const HEROWRAP = styled.div`
  background-color: #e8f7f7;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  .inner-div {
    width: 90%;
    display: flex;
    flex-direction: row;
  }

  .left-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    text-align: center;

    h2 {
      background-color: #000;
      font-size: 35px;
      font-family: "Poppins,Lucida";
      font-family: Helvetica, Arial, sans-serif;
      color: #fff;
    }
    h1 {
      color: #008e51;
      font-size: 52px;
      font-family: "Poppins,Lucida";
      font-family: Helvetica, Arial, sans-serif;
      line-height: 45px;
      font-weight: bolder;
    }
    hr {
      border: 3px solid #ffbb12;
      opacity: 1;
      margin-bottom: 1rem;
      margin-top: 2rem;
      background: #ffbb12;
      width: 80%;
      text-align: center;
    }
    span {
      color: #ffbb12;
      font-family: "DM Serif Display";
      font-weight: 400;
    }
  }

  .right-side {
    width: 50%;
    img {
      margin-top: 7rem;
      width: 95%;
      /* padding: px; */
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    /* min-height: 10%; */
    width: 100%;

    .inner-div {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .left-side {
      width: 100%;
      h1 {
        font-size: 30px;
        line-height: 29px;
      }

      h2 {
        background-color: #000;
        font-size: 25px;
        font-family: "Poppins, Helvetica, Arial, Lucida, sans-serif";
        color: #fff;

        text-align: center;
      }
    }

    .right-side {
      margin-top: 0px;
      width: 100%;
      /* background-color: red; */
      img {
        /* display: none; */
      }
    }
  }
`;
