import styled from "styled-components";

export const HEROWRAP = styled.div`
  background-color: #e8f7f7;

  width: 100%;
  /* min-height: 100%; */

  .inner-div {
    width: 100%;
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
      font-size: 30px;
      font-family: "Poppins, Helvetica, Arial, Lucida, sans-serif";
      color: #fff;
      /* padding: 0px 50px 0px 50px; */

      /* text-align: center; */
    }
    h1 {
      color: #008e51;
      font-size: 52px;
      font-family: "Poppins, Helvetica, Arial, Lucida, sans-serif";
      line-height: 45px;
      font-weight: bolder;
      margin-bottom: 30px;
    }
    hr {
      border: 3px solid #ffbb12;
      opacity: 1;
      margin-bottom: 1rem;
      margin-top: 2rem;
      background: #ffbb12;
      width: 100%;
      text-align: center;
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
    height: 100vh;
    width: 100%;

    .inner-div {
      display: flex;
      flex-direction: column;
      height: 100vh;
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
      width: 100%;
      background-color: red;
      img {
        display: none;
      }
    }
  }
`;
