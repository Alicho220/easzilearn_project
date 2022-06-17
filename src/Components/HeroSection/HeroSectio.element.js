import styled from "styled-components";

export const HEROWRAP = styled.div`
  background-color: #e8f7f7;

  width: 100%;
  height: 100vh;

  .inner-div {
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
  }

  /* .logo-header {
    padding: 30px 0;
    margin-bottom: 3rem;

    img {
      width: 130px;
    } */

  .left-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* align-item:center ; */
    width: 50%;
    text-align: center;
    /* padding: 200px; */
    /* margin-top: 10rem; */
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
      margin-top: 5.4rem;
      width: 89%;
      padding: 5px;
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: red;

    .left-side {
      width: 100%;
      h1 {
        font-size: 10px;
      }
    }

    .right-side {
      width: 100%;
      /* background-color: red; */
    }
  }
`;
// export const INNERWRAP = styled.div`
//   display: flex;
// `;
