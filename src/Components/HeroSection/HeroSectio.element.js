import styled from "styled-components";

export const HEROWRAP = styled.div`
  background-color: #e8f7f7;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  .logo-header {
    padding: 30px 0;
    margin-bottom: 3rem;

    img {
      width: 130px;
    }
  }
  .left-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    text-align: center;
    padding: 100px;
    margin-top: 10rem;
    /* margin-top: 50px; */

    h2 {
      background-color: #000;
      font-size: 30px;
      font-family: "Poppins, Helvetica, Arial, Lucida, sans-serif";
      color: #fff;

      text-align: center;
    }
    h1 {
      color: #008e51;
      font-size: 52px;
      font-family: "Poppins, Helvetica, Arial, Lucida, sans-serif";
      line-height: 52px;
      font-weight: bolder;

      margin-bottom: 30px;
    }
    hr {
      border: 3px solid #ffbb12;
      opacity: 1;
      margin-bottom: 1rem;
      background: #ffbb12;
      /* width: 400px; */
    }
  }

  .right-side {
    /* padding: 100px; */
    width: 50%;
    img {
      margin-top: 10rem;
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: red;

    .left-side {
      /* display: flex; */
      width: 100%;
    }

    .right-side {
      width: 100%;
    }
  }
`;
export const INNERWRAP = styled.div`
  display: flex;
`;
